import { Resolver, Query } from '@nestjs/graphql'
import { Query as QueryType } from '@src/generated/graphql'

@Resolver('')
export class CategoryResolver {
  @Query(() => String)
  categories(): QueryType['categories'] {
    return [
      {
        id: '1',
        name: '洗濯',
        order: 1,
        itemCount: 10,
      },
    ]
  }
}
