import { Request, Response } from 'express'

interface IRequestWithCookie extends Request {
  cookies: Record<string, string | undefined>
}

export interface IGqlContext {
  req: IRequestWithCookie
  res: Response
}
