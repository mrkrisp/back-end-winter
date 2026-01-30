import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from 'prisma/generated/prisma/client'

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(private configService: ConfigService) {
    const connectionString = configService.getOrThrow<string>('DATABASE_URL')

    if (!connectionString) {
      throw new Error('DATABASE_URL is not defined')
    }

    const adapter = new PrismaPg({ connectionString })

    super({ adapter })
  }

  async onModuleInit() {
    await this.$connect()
    console.log('✅ Prisma connected to PostgreSQL')
  }

  async onModuleDestroy() {
    await this.$disconnect()
    console.log('🔌 Prisma disconnected from PostgreSQL')
  }
}
