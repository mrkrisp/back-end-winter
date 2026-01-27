import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { hash } from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthInput } from './auth.input';
import { IAuthTokenData } from './auth.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private configService: ConfigService,
    private jwt: JwtService
  ) {}

  private EXPIRE_DAY_REFRESH_TOKEN = 3;
  REFRESH_TOKEN_NAME = 'refreshToken';

  async register(input: AuthInput) {
    try {
      const email = input.email.toLowerCase();
      const existingUser = await this.prisma.user.findFirst({
        where: {
          email: {
            equals: email,
            mode: 'insensitive',
          },
        },
      });

      if (existingUser) {
        throw new BadRequestException('User with this email already exists');
      }

      const user = await this.prisma.user.create({
        data: {
          email: email,
          password: await hash(input.password),
        },
      });

      const tokens = this.generateTokens({
        id: user.id,
        role: user.role,
      });

      return { user, ...tokens };
    } catch (err) {
      throw new BadRequestException('Registration failed: ' + err);
    }
  }

  private generateTokens(data: IAuthTokenData) {
    const accessToken = this.jwt.sign(data, {
      expiresIn: '1h',
    });

    const refreshToken = this.jwt.sign(data, {
      expiresIn: `${this.EXPIRE_DAY_REFRESH_TOKEN}d`,
    });

    return { accessToken, refreshToken };
  }
}
