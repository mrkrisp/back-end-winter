import { ApolloDriverConfig } from '@nestjs/apollo'
import { ConfigService } from '@nestjs/config'
import { IGqlContext } from 'src/app.interface'

export const getGraphQLConfig = (
  configService: ConfigService
): ApolloDriverConfig => ({
  autoSchemaFile: true,
  sortSchema: true,
  playground: configService.get<string>('MODE') === 'development',
  context: ({ req, res }: IGqlContext): IGqlContext => ({ req, res }),
})
