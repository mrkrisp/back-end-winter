import { BadRequestException } from '@nestjs/common'
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql'
import type { IGqlContext } from 'src/app.interface'
import { AuthAccountService } from './auth-account.service'
import { AuthCookieService } from './auth-cookie.service'
import { AuthResponse } from './auth.interface'
import { AuthService } from './auth.service'
import { VerifyCaptcha } from './decorators/captcha.decorator'
import { AuthInput } from './inputs/auth.input'
import { RequestPasswordResetInput } from './inputs/reset-password-request.input'
import { ResetPasswordInput } from './inputs/reset-password.input'

@Resolver()
export class AuthResolver {
	constructor(
		private authService: AuthService,
		private authCookieService: AuthCookieService,
		private authAccountService: AuthAccountService
	) {}

	@Mutation(() => AuthResponse)
	@VerifyCaptcha()
	async register(
		@Args('data', { type: () => AuthInput }) input: AuthInput,
		@Context() { res }: IGqlContext
	) {
		const { accessToken, refreshToken, ...response } =
			await this.authService.register(input)

		this.authCookieService.toggleAccessTokenCookie(res, accessToken)
		this.authCookieService.toggleRefreshTokenCookie(res, refreshToken)

		return response
	}

	@Mutation(() => AuthResponse)
	// @VerifyCaptcha()
	async login(
		@Args('data', { type: () => AuthInput }) input: AuthInput,
		@Context() { res }: IGqlContext
	) {
		const { accessToken, refreshToken, ...response } =
			await this.authService.login(input)

		this.authCookieService.toggleAccessTokenCookie(res, accessToken)
		this.authCookieService.toggleRefreshTokenCookie(res, refreshToken)

		return response
	}

	@Mutation(() => Boolean)
	async requestVerifyEmail(@Args('email') email: string) {
		return this.authAccountService.requestVerifyEmail(email)
	}

	@Mutation(() => Boolean)
	async verifyEmail(@Args('token', { type: () => String }) token: string) {
		return this.authAccountService.verifyEmail(token)
	}

	@Mutation(() => Boolean)
	@VerifyCaptcha()
	async requestResetPassword(
		@Args('data', { type: () => RequestPasswordResetInput })
		input: RequestPasswordResetInput
	) {
		return this.authAccountService.requestPasswordReset(input.email)
	}

	@Mutation(() => Boolean)
	async resetPassword(
		@Args('data', { type: () => ResetPasswordInput }) input: ResetPasswordInput
	) {
		const { token, newPassword } = input
		return this.authAccountService.resetPassword(token, newPassword)
	}

	@Mutation(() => AuthResponse)
	async newTokens(@Context() { req, res }: IGqlContext) {
		const initialRefreshToken =
			req.cookies?.[this.authCookieService.REFRESH_TOKEN_NAME]

		if (!initialRefreshToken) {
			this.authCookieService.toggleRefreshTokenCookie(res, null)
			this.authCookieService.toggleAccessTokenCookie(res, null)
			throw new BadRequestException('Refresh token is missing')
		}

		const { refreshToken, accessToken, ...response } =
			await this.authService.getNewTokens(initialRefreshToken)

		this.authCookieService.toggleRefreshTokenCookie(res, refreshToken)
		this.authCookieService.toggleAccessTokenCookie(res, accessToken)

		return response
	}

	@Mutation(() => Boolean)
	logout(@Context() { req, res }: IGqlContext) {
		const initialRefreshToken =
			req.cookies[this.authCookieService.REFRESH_TOKEN_NAME]

		this.authCookieService.toggleRefreshTokenCookie(res, null)
		this.authCookieService.toggleAccessTokenCookie(res, null)

		if (!initialRefreshToken) {
			throw new BadRequestException('Refresh token is missing')
		}

		return true
	}
}
