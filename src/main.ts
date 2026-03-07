import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import cookieParser from 'cookie-parser'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule)

	app.use(cookieParser())

	app.enableCors({
		origin: ['http://localhost:4200', 'http://localhost:3000'],
		credentials: true
	})

	app.disable('x-powered-by')

	await app.listen(process.env.PORT ?? 4200)
}

void bootstrap()
