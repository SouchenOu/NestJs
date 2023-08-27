import { Module } from "@nestjs/common";
import { appController } from "./user.controller";

@Module({
    controllers: [appController],
})
export class UserModule{

}