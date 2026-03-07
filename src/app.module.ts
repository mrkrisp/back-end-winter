import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { TurnstileModule } from 'nest-cloudflare-turnstile'
import { ResendModule } from 'nestjs-resend'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { getGraphQLConfig } from './config/graphql.config'
import { getTurnstileConfig } from './config/turnstile.config'
import { OrdersModule } from './orders/orders.module'
import { PrismaModule } from './prisma/prisma.module'
import { RecipesModule } from './recipes/recipes.module'
import { UsersModule } from './users/users.module'
import { EmailModule } from './email/email.module';
import { MediaUploadModule } from './media-upload/media-upload.module';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		GraphQLModule.forRootAsync<ApolloDriverConfig>({
			driver: ApolloDriver,
			imports: [ConfigModule],
			useFactory: getGraphQLConfig,
			inject: [ConfigService]
		}),
		TurnstileModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: getTurnstileConfig,
			inject: [ConfigService]
		}),
		ResendModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: (configService: ConfigService) => ({
				apiKey: configService.getOrThrow<string>('RESEND_API_KEY')
			}),
			inject: [ConfigService]
		}),
		AuthModule,
		UsersModule,
		RecipesModule,
		OrdersModule,
		PrismaModule,
		EmailModule,
		MediaUploadModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
