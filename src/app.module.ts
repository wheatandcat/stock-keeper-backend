import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius'
import { AppController } from '@src/app.controller'
import { AppService } from '@src/app.service'
import { HelloResolver } from './hello.resolver'
import { CategoryResolver } from '@src/resolver/category'
import { PrismaService } from '@src/modules/prisma/prisma.service'

@Module({
  controllers: [AppController],
  providers: [AppService, HelloResolver, CategoryResolver, PrismaService],
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      graphiql: true,
      typePaths: ['./**/schema.graphql'],
    }),
  ],
})
export class AppModule {}
