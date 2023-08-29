import { Module } from "@nestjs/common";
import { appController } from "./user.controller";
import { UserServices } from "./users.service";

@Module({
    controllers: [appController],
    providers: [UserServices]
    // if i user exports:[UserServices]  then i can user UserServices outside the folder that user.module exist, because if there is no exports we cant user service class outside the folder that module exist
   // exports: [UserServices]
})
export class UserModule{

}