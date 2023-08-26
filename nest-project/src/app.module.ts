import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

//The root module of the application.

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

// appModule is a root 