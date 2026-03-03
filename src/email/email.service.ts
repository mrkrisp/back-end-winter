import { Injectable } from '@nestjs/common'
import { render } from '@react-email/render'
import { ResendService } from 'nestjs-resend'
import ResetPasswordEmail from './templates/reset-password'
import VerificationEmail from './templates/verification-email'

@Injectable()
export class EmailService {
	constructor(private readonly resend: ResendService) {}

	private async send(to: string, subject: string, html: string) {
		return this.resend.send({
			from: 'onboarding@resend.dev',
			to,
			subject,
			html
		})
	}

	async sendVerificationEmail(to: string, url: string) {
		const html = await render(VerificationEmail({ url }))
		return this.send(to, 'Verify your email', html)
	}

	async sendResetPasswordEmail(to: string, url: string) {
		const html = await render(ResetPasswordEmail({ url }))
		return this.send(to, 'Reset your password', html)
	}
}
