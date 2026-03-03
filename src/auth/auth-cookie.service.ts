import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import type { Response } from 'express'
import { PrismaService } from 'src/prisma/prisma.service'
import { isDev } from 'src/utils/is-dev.util'
import { AuthService } from './auth.service'

@Injectable()
export class AuthCookieService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly authService: AuthService,
		private readonly configService: ConfigService
	) {}

	readonly ACCESS_TOKEN_NAME = 'accessToken' as const
	readonly REFRESH_TOKEN_NAME = 'refreshToken' as const

	toggleAccessTokenCookie(res: Response, token: string | null) {
		this.toggleAuthTokenCookie({
			response: res,
			token,
			name: this.ACCESS_TOKEN_NAME,
			expires: new Date(
				Date.now() +
					this.authService.getExpiresToken(this.ACCESS_TOKEN_NAME) * 3600000
			)
		})
	}

	toggleRefreshTokenCookie(res: Response, token: string | null) {
		this.toggleAuthTokenCookie({
			response: res,
			token,
			name: this.REFRESH_TOKEN_NAME,
			expires: new Date(
				Date.now() +
					this.authService.getExpiresToken(this.REFRESH_TOKEN_NAME) *
						24 *
						60 *
						60 *
						1000
			)
		})
	}

	private toggleAuthTokenCookie({
		expires,
		name,
		response,
		token
	}: {
		response: Response
		name:
			| AuthCookieService['ACCESS_TOKEN_NAME']
			| AuthCookieService['REFRESH_TOKEN_NAME']
		token: string | null
		expires: Date
	}) {
		const isRemoveCookie = !token
		const expiresIn = isRemoveCookie ? new Date(0) : expires

		response.cookie(name, token || '', {
			httpOnly: true,
			domain: 'localhost',
			expires: expiresIn,
			sameSite: isDev(this.configService) ? 'none' : 'strict',
			secure: true
		})
	}
}
