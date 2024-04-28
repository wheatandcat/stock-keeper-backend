import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { Observable } from 'rxjs'

export type Auth = {
  uid: string
}

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const ctx = GqlExecutionContext.create(context)
    const request = ctx.getContext().req
    request.auth = {
      uid: 'uid',
      userId: 1,
    } as Auth

    return true
  }
}
