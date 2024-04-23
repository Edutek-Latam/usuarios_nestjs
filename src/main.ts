import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionFilter } from './helpers/filters/http_exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidUnknownValues: true,
    forbidNonWhitelisted: true

  }))

  app.useGlobalFilters(new AllExceptionFilter())
  await app.listen(3000);
}
bootstrap();
