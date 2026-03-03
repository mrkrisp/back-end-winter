import {
	BadRequestException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { verify } from 'argon2'
import { EmailService } from 'src/email/email.service'
import { UsersService } from 'src/users/users.service'
import { generateToken } from 'src/utils/generate-token.util'
import  { AuthCookieService } from './auth-cookie.service'
import type { TAuthTokenData } from './auth.interface'
import { AuthInput } from './inputs/auth.input'

@Injectable()
export class AuthService {
	constructor(
		private configService: ConfigService,
		private jwt: JwtService,
		private userService: UsersService,
		private emailService: EmailService
	) {}

	private readonly EXPIRE_HOURS_ACCESS_TOKEN = 1
	private readonly EXPIRE_DAYS_REFRESH_TOKEN = 3

	async register(input: AuthInput) {
		const email = input.email.toLowerCase()

		const emailVerificationToken = generateToken()

		const user = await this.userService.create(
			email,
			input.password,
			emailVerificationToken
		)

		const tokens = this.generateTokens({
			id: user.id,
			role: user.role
		})

		const verificationUrl = `${this.configService.getOrThrow<string>('CLIENT_URL')}/verify-email?token=${emailVerificationToken}`

		await this.emailService.sendVerificationEmail(user.email, verificationUrl)

		return { user, ...tokens }
	}

	async login(input: AuthInput) {
		const user = await this.validateUser(input)

		const tokens = this.generateTokens({
			id: user.id,
			role: user.role
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
			role: user.role
		})

		return { user, ...tokens }
	}

	private generateTokens(data: TAuthTokenData) {
		const accessToken = this.jwt.sign(data, {
			expiresIn: `${this.EXPIRE_HOURS_ACCESS_TOKEN}`
		})

		const refreshToken = this.jwt.sign(data, {
			expiresIn: `${this.EXPIRE_DAYS_REFRESH_TOKEN}d`
		})

		return { accessToken, refreshToken }
	}

	getExpiresToken(
		tokenName:
			| AuthCookieService['ACCESS_TOKEN_NAME']
			| AuthCookieService['REFRESH_TOKEN_NAME']
	) {
		if (tokenName === 'refreshToken') {
			return this.EXPIRE_DAYS_REFRESH_TOKEN
		} else {
			return this.EXPIRE_HOURS_ACCESS_TOKEN
		}
	}
}
