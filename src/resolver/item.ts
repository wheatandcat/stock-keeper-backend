import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import {
  Query as QueryType,
  Mutation as MutationType,
  MutationCreateItemArgs,
} from '@src/generated/graphql'
import { PrismaService } from '@src/modules/prisma/prisma.service'
import { format } from '@src/lib/graphql'
import { AuthGuard } from '@src/common/guards/auth/auth.guard'

@Resolver('')
export class ItemResolver {
  constructor(private prisma: PrismaService) {}

  @Query('items')
  @UseGuards(AuthGuard)
  async categories(
    @Args('categoryId') categoryId: number,
    @Context() context
  ): Promise<QueryType['items']> {
    const user = context.req.auth

    const r = await this.prisma.item.findMany({
      where: {
        userId: user.userId,
        categoryId: categoryId,
      },
      orderBy: {
        order: 'asc',
      },
    })
    return r.map((c) => format(c))
  }

  @Query('item')
  @UseGuards(AuthGuard)
  async category(
    @Args('id') id: number,
    @Context() context
  ): Promise<QueryType['item']> {
    const user = context.req.auth

    const r = await this.prisma.item.findFirst({
      where: {
        id: id,
        userId: user.userId,
      },
    })
    return format(r)
  }

  @Mutation('createItem')
  @UseGuards(AuthGuard)
  async createItem(
    @Args('input') input: MutationCreateItemArgs['input'],
    @Context() context
  ): Promise<MutationType['createItem']> {
    const user = context.req.auth

    const r = await this.prisma.item.create({
      data: {
        userId: user.userId,
        name: input.name,
        categoryId: input.categoryId,
        stock: input.stock,
        expirationDate: input.expirationDate,
        order: input.order,
      },
    })

    return format(r)
  }
}
