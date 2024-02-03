import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { HelloResolver } from './hello.resolver'
import { CategoryResolver } from '@src/resolver/category'

@Module({
  controllers: [AppController],
  providers: [AppService, HelloResolver, CategoryResolver],
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      graphiql: true,
      typePaths: ['./**/schema.graphql'],
    }),
  ],
})
export class AppModule {}
