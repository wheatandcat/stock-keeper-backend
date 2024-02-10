import { NestFactory } from '@nestjs/core'
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true })
  )

  const port = Number(process.env.PORT) || 8080
  console.log(`Listening on port ${port}`)
  await app.listen(port, '0.0.0.0')
}

bootstrap()
