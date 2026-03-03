import type { ConfigService } from '@nestjs/config'
import type { Request } from 'express'
import type { ITurnstileOptions } from 'nest-cloudflare-turnstile'

export const getTurnstileConfig = (
	configService: ConfigService
): ITurnstileOptions => {
	const secretKey = configService.getOrThrow<string>(
		'CLOUDFLARE_TURNSTILE_SECRET_KEY'
	)

	return {
		secretKey,
		tokenResponse: (req: Request) => req.headers['cf-turnstile-token'] as string
	}
}
