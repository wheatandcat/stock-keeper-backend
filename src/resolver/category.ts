import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql'
import { UseGuards, Req } from '@nestjs/common'
import {
  Query as QueryType,
  NewCategory,
  Category,
} from '@src/generated/graphql'
import { PrismaService } from '@src/modules/prisma/prisma.service'
import { format } from '@src/lib/graphql'
import { AuthGuard } from '@src/common/guards/auth/auth.guard'

@Resolver('')
export class CategoryResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => String)
  @UseGuards(AuthGuard)
  async categories(@Context() context): Promise<QueryType['categories']> {
    const user = context.req.auth

    const r = await this.prisma.category.findMany({
      where: {
        userId: user.userId,
      },
      orderBy: {
        order: 'asc',
      },
    })
    return r.map((c) => format(c))
  }

  @Mutation('createCategory')
  @UseGuards(AuthGuard)
  async createCategory(
    @Args('input') input: NewCategory,
    @Context() context
  ): Promise<Category> {
    const user = context.req.auth

    const r = await this.prisma.category.create({
      data: {
        userId: user.userId,
        name: input.name,
        order: input.order,
      },
    })

    return format(r)
  }
}