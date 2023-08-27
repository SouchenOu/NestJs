import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';


@Module({
  //the list of imported modules that export the providers which are required in this module
  // every other moduls there is his reference in the route module and we put it in imports
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}


// this is the route modul
