import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// The entry file of the application which uses the core function NestFactory to create a Nest application instance.

// When you pass a type to the NestFactory.create() method, as in the example below, the app object will have methods available exclusively for that specific platform. Note, however, you don't need to specify a type unless you actually want to access the underlying platform API.

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
