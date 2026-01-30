import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { ICurrentUser, IRequestWithUser } from '../auth.interface'

export const CurrentUser = createParamDecorator(
  (data: keyof ICurrentUser, ctx: ExecutionContext) => {
    let user: ICurrentUser | null | undefined = null

    if (ctx.getType() === 'http') {
      user = ctx.switchToHttp().getRequest<IRequestWithUser>().user
    } else {
      const context = GqlExecutionContext.create(ctx)
      user = context.getContext<{ req: IRequestWithUser }>().req.user
    }

    if (!user) return null

    return data ? user[data] : user
  }
)
