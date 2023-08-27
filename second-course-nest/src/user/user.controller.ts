import { Controller, Get } from "@nestjs/common";

//each controller has more than one route, and different routes can perform different actions.
@Controller('users')
export class appController{
    @Get()
    findAllUsers() : string[] {
        return ['soukaina', 'ahmed', 'salma']
    }
}