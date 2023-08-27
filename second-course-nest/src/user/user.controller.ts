import { Controller, Get, Post, Patch, Delete , Req, Param} from "@nestjs/common";

//each controller has more than one route, and different routes can perform different actions.
@Controller('users')
export class appController{

    //The @Get() HTTP request method decorator before the findAll() method tells Nest to create a handler for a specific endpoint for HTTP requests. 
    @Get()
    findAllUsers() : string[] {
        return ['soukaina', 'ahmed', 'salma']
    }

    @Post()
    Create(@Req() req: Request): string{
        console.log(req.body);
        return ("create new user");
    }
    @Post()
    //We obviously must declare a method to bind the route to
    createUser() : string
    {
        return "create user";
    }
    @Patch()
    update() : string{
        return "update user";
    }

    @Delete()
    delete_user() : string{
        return "delete user"
    }


    // @param
    @Get(':id')
    findOne(@Param("id") id: string) : string{
        return id;

    }

    @Get(':username')
    findTwo(@Param("username") username: number) : number{
        return username;

    }
}