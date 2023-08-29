import { Controller, Get, Post, Patch, Delete , Req, Param, Body, Res, HttpCode, HttpStatus, ParseIntPipe,ParseUUIDPipe, ValidationPipe, Query} from "@nestjs/common";
import { createUserdto } from "src/dtos/createUser.dto";
import { updateUserdto } from "src/dtos/update-user.dto";
import { UserEntity } from "./user.entity";
import { v4 as uuid} from 'uuid';
import { CustomValidationPipe } from "./pipes/validation.pipe";
import { UserServices } from "./users.service";
//each controller has more than one route, and different routes can perform different actions.
@Controller('users')
export class appController{

    // to use bissness logique functions that exist in our service we use a constructor
    constructor(private readonly UserService : UserServices){}
    /**********************Using entity  , find() and push()***************************** */

    private readonly users: UserEntity[] = [];


    @Get()
    CustomPipe(@Query('username', CustomValidationPipe) username: string) : UserEntity []
    {
            return this.users;
    }
    @Get()
    DisplayUsers() : UserEntity[]
    {
        return this.users;
    }
    @Get(':id')
    findUser(@Param("id") id : string) 
    {
        // so now we can just add findUserById() function that exist in our service class
        return this.UserService.findUserById(id)
        //return this.users.find((user : UserEntity) => user.id === id);
    }
    @Post()
    createUserAgain(@Body() createUserdto : createUserdto) {
        const newUser : UserEntity = {
            ...createUserdto,
            id : uuid() //to identify something with near certainty that the identifier does not duplicate 
        }
        this.users.push(newUser);
        return newUser;
    }

    //The @Get() HTTP request method decorator before the findAll() method tells Nest to create a handler for a specific endpoint for HTTP requests. 
    @Get()
    findAllUsers() : string[] {
        return ['soukaina', 'ahmed', 'salma']
    }
    /**********************************************Update logic************************************* */
    @Patch(":id")
    updateLast(@Param('id') id : string , @Body() updateUserdto: updateUserdto)
    {
        const index = this.users.findIndex((user : UserEntity) => user.id === id);
        this.users[index] = { ...this.users[index], ...updateUserdto}
        return this.users[index]
    }
    /*****************************Using DTO class********************************** */
    @Patch(":username")
    updateOne(@Param("username") username : string, @Body() input: updateUserdto)
    {
        return input;
    }
    
    // ****************************************@Req()****************************************************
    @Post()
    Create(@Req() req: Request): string{
        console.log(req.body);
        return ("create new user");
    }
    /****************************some tests with Post and Patch requests************************** */
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

    // @Delete()
    // delete_user() : string{
    //     return "delete user"
    // }


    // *****************************************************@param***********************************************
    @Get(':id')
    findOne(@Param("id") id: string) : string{
        return id;

    }

    @Get(':username')
    findTwo(@Param("username") username: number) : number{
        return username;

    }
    //***************************************************@Body() ***********************************************************************/
    @Post('create')
    create(@Body() userData: any) : string{
        return userData;
    }
    // you can choose what you want exacty to display in our body (in our case we choose to display the email)
    @Post('createOther')
    createAnother(@Body('email') userData: any) : string{
        return userData;
    }

    /*********************************************Status code ************************************************/
    @Post(":statusTest")
    // @HttpCode(HttpStatus.NO_CONTENT)
    JustTest(@Param('statusTest') statusTest: string)
    {
            return statusTest;
    }

    /**********Delete */

    @Delete(":id")
    removeTest(@Param("id") id : string) : UserEntity[]
    {
        const newUser = this.users.filter((user: UserEntity) => user.id != id)
        return newUser;
    }

    /********************************************************Pipes***************************************** */
    // validationPipe
    @Post('test')
    implimentDto(@Body(ValidationPipe) userData : createUserdto){
        return userData;
    }
    /**************************************************************************************** */

    @Get(':id')
    ImplimentPipe(@Param('id', ParseIntPipe) id : number): number
    {
        return id;
    }
    // in this example we check if  the id is correct
    @Get(':id')
    ImplimentPipe2(@Param('id', ParseUUIDPipe) id : number): number
    {
        return id;
    }
    

    
   
}