import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import type { Request } from 'express'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { User } from 'prisma/generated/client'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(
		private configService: ConfigService,
		private prisma: PrismaService
	) {
		super({
			jwtFromRequest: ExtractJwt.fromExtractors([
				(request: Request) =>
					(request?.cookies?.accessToken as string | null) ?? null
			]),
			secretOrKey: configService.getOrThrow<string>('JWT_SECRET')
		})
	}

	validate({ id }: { id: string }): Promise<User | null> {
		return this.prisma.user.findUnique({
			where: { id },
			include: {
				profile: true,
				measurements: true
			}
		})
	}
}
