import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  })

  const config = new DocumentBuilder()
    .setTitle('Pharma Inc.')
    .setDescription(
      ' Sistema de gestão e visualização da informação de pacientes de maneira simples e objetiva.',
    )
    .setVersion('3.0')
    .addTag('users')
    .build()

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  }

  const customOptions: SwaggerCustomOptions = {
    customSiteTitle: 'Pharma Inc. API Docs',
  }

  const document = SwaggerModule.createDocument(app, config, options)
  SwaggerModule.setup('api', app, document, customOptions)

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )
  await app.listen(5000)
}
bootstrap()
