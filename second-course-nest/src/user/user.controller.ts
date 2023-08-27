import { Controller, Get, Post, Patch, Delete , Req, Param, Body, Res, HttpCode, HttpStatus} from "@nestjs/common";
import { createUserdto } from "src/dtos/createUser.dto";
import { updateUserdto } from "src/dtos/update-user.dto";

//each controller has more than one route, and different routes can perform different actions.
@Controller('users')
export class appController{

    //The @Get() HTTP request method decorator before the findAll() method tells Nest to create a handler for a specific endpoint for HTTP requests. 
    @Get()
    findAllUsers() : string[] {
        return ['soukaina', 'ahmed', 'salma']
    }
    /*****************Using DTO to validate****************** */
    @Patch(":username")
    updateOne(@Param("username") username : string, @Body() input: updateUserdto)
    {
        return input;
    }
    @Post('test')
    implimentDto(@Body() userData : createUserdto){
        return userData;
    }
    // ***************************@Req()**********************
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
    @Patch(":username")
    updateTest(@Param("username") username : string, @Body() input){
            return input
    }
    @Patch()
    update() : string{
        return "update user";
    }

    // @Delete()
    // delete_user() : string{
    //     return "delete user"
    // }


    // ************************************@param
    @Get(':id')
    findOne(@Param("id") id: string) : string{
        return id;

    }

    @Get(':username')
    findTwo(@Param("username") username: number) : number{
        return username;

    }
    //****************************@Body() ************************/
    @Post('create')
    create(@Body() userData: any) : string{
        return userData;
    }
    // you can choose what you want exacty to display in our body (in our case we choose to display the email)
    @Post('createOther')
    createAnother(@Body('email') userData: any) : string{
        return userData;
    }

    /**************Status code */
    @Post(":statusTest")
    // @HttpCode(HttpStatus.NO_CONTENT)
    JustTest(@Param('statusTest') statusTest: string)
    {
            return statusTest;
    }

    /***********Impliment DTO************** */
   
}