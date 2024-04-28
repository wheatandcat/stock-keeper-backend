import { Resolver, Query, Mutation, Context } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import {
  Query as QueryType,
  Mutation as MutationType,
} from '@src/generated/graphql'
import { PrismaService } from '@src/modules/prisma/prisma.service'
import { format } from '@src/lib/graphql'
import { AuthGuard } from '@src/common/guards/auth/auth.guard'

@Resolver('')
export class UserResolver {
  constructor(private prisma: PrismaService) {}

  @Query('me')
  @UseGuards(AuthGuard)
  async me(@Context() context): Promise<QueryType['me']> {
    const user = context.req.auth

    const r = await this.prisma.user.findFirst({
      where: {
        uid: user.uid,
      },
    })
    return format(r)
  }

  @Mutation('createUser')
  @UseGuards(AuthGuard)
  async createItem(@Context() context): Promise<MutationType['createItem']> {
    const user = context.req.auth

    const r = await this.prisma.user.create({
      data: {
        uid: user.uid,
      },
    })

    return format(r)
  }
}
