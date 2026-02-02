import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { verify } from 'argon2'
import { Response } from 'express'
import { PrismaService } from 'src/prisma/prisma.service'
import { UsersService } from 'src/users/users.service'
import { isDev } from 'src/utils/is-dev.util'
import { AuthInput } from './auth.input'
import type { TAuthTokenData } from './auth.interface'

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private configService: ConfigService,
    private jwt: JwtService,
    private userService: UsersService
  ) {}

  private EXPIRE_DAY_REFRESH_TOKEN = 3
  REFRESH_TOKEN_NAME = 'refreshToken'

  async register(input: AuthInput) {
    try {
      const email = input.email.toLowerCase()

      const user = await this.userService.create(email, input.password)

      const tokens = this.generateTokens({
        id: user.id,
        role: user.role,
      })

      return { user, ...tokens }
    } catch (err) {
      throw new BadRequestException('Registration failed: ' + err)
    }
  }

  async login(input: AuthInput) {
    const user = await this.validateUser(input)

    const tokens = this.generateTokens({
      id: user.id,
      role: user.role,
    })

    return { user, ...tokens }
  }

  private async validateUser(input: AuthInput) {
    const email = input.email
    const user = await this.userService.findByEmail(email)

    if (!user) {
      throw new NotFoundException('Invalid email or password')
    }

    const isPasswordValid = await verify(user.password, input.password)

    if (!isPasswordValid) {
      throw new NotFoundException('Invalid email or password')
    }

    return user
  }

  async getNewTokens(refreshToken: string) {
    const result = await this.jwt.verifyAsync<TAuthTokenData>(refreshToken)
    if (!result) throw new BadRequestException('Invalid refresh token')

    const user = await this.userService.findById(result.id)

    if (!user) throw new NotFoundException('User not found')

    const tokens = this.generateTokens({
      id: user.id,
      role: user.role,
    })

    return { user, ...tokens }
  }

  private generateTokens(data: TAuthTokenData) {
    const accessToken = this.jwt.sign(data, {
      expiresIn: '1h',
    })

    const refreshToken = this.jwt.sign(data, {
      expiresIn: `${this.EXPIRE_DAY_REFRESH_TOKEN}d`,
    })

    return { accessToken, refreshToken }
  }

  toggleRefreshTokenCookie(response: Response, token: string | null) {
    const isRemoveCookie = !token
    const expiresIn = isRemoveCookie
      ? new Date(0)
      : new Date(
          Date.now() + this.EXPIRE_DAY_REFRESH_TOKEN * 24 * 60 * 60 * 1000
        )

    response.cookie(this.REFRESH_TOKEN_NAME, token || '', {
      httpOnly: true,
      domain: 'localhost',
      expires: expiresIn,
      sameSite: isDev(this.configService) ? 'none' : 'strict',
      secure: true,
    })
  }
}
