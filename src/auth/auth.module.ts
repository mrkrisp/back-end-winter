import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { getJwtConfig } from 'src/config/jwt.config'
import { EmailModule } from 'src/email/email.module'
import { PrismaModule } from 'src/prisma/prisma.module'
import { UsersModule } from 'src/users/users.module'
import { AuthAccountService } from './auth-account.service'
import './auth.enum'
import { AuthResolver } from './auth.resolver'
import { AuthService } from './auth.service'
import { JwtStrategy } from './strategies/jwt.strategy'
import { AuthCookieService } from './auth-cookie.service'

@Module({
	imports: [
		PrismaModule,
		PassportModule.register({ defaultStrategy: 'jwt' }),
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getJwtConfig
		}),
		UsersModule,
		EmailModule
	],
	providers: [JwtStrategy, AuthService, AuthResolver, AuthAccountService, AuthCookieService]
})
export class AuthModule {}
