import { Controller, Get, Post, Req, Res , Body, Param, Query} from '@nestjs/common';
import {Request,Response} from 'express'
import { CreateUserDto } from 'src/users/dtos/createUserDto';


// a controller is define a method 
// this is the prefix for every route
@Controller('users')
/******************************************Get request**************************** */
export class UsersController {
    // we want to use a decorator (the GET decorator)--> function decorator are basically just a function
    // we can pass an argument inside this Get() function to define the route for this endpoint

    // here we are creating a route (localhost:3000/users)
    //Nest will map GET /users because we dont have any path in the decorator Get()
    @Get()
    // we are inside a class, i'm going a head and name my method 
    getUsers(){

        return { username: 'souchen', email: 'souchen@gmail.com'};
    }
    //lets create another get request
    // here we are creating a rout (localhost:3000/users/posts)
    @Get('posts')
    getUsersPosts(){
        return [
            {
                username: 'soukaina',
                email:'souka@gmail.com',
                //array posts
                posts: [
                    {
                        id: 1,
                        title: 'post1',
                        
                    },
                    {
                        id: 2,
                        totle: 'post2'
                    },
                ],
            },
        ];

    }
    // new route here (users/posts/comments)
    /****Get() HTTP request method decorator before the getUsersPostsComments() method tells Nest to create a handler for a specific endpoint for HTTP requests. */
    @Get('posts/comments')
    getUsersPostsComments()
    {
        return [
            {
                id: 1,
                title: 'Post 1',
                comments: 'hello souchen'
            },
        ];
    }
    /***********************************Post request********************************* */
    /*Post request are used for creating a resources on the backend server so for example, if you were to create a register form, 
    that register form where the user submits there  data it is supposed to make a post request to the server
    so to handle post request  that we would do the same thing with GET request we would define a method called createUser()*/

    // Firstly we will use a post decorater, and that is also imported from @nestjs/common
    @Post()
    // now we will send a request body to this endpoint but how we handle a request bodies
    /*so we use @req decorater and this is bassicaly a short form request, and we use an argument request of type Request
    it is the interface that comes from the express package, so nest is build on top of express , so a lot of the data types 
    and all thos classes are going to be a lot of them are used from express  */

    /****handle request bodies with expressJs way** */ 
    /****We can access the request object by instructing Nest to inject it by adding the @Req() decorator to the handler's signature. */
    createUser(@Req() request: Request, @Res() response: Response) {
        console.log(request.body);
        response.send('created')

    }
    /*******lets handle request bodies with nestjs way */
    /****we are gonna use a body decorator @body() that also imported from @nestjs/common  and then what we want to do is we want to name our parameter you can name it whatever you want.
     * okey now the next part we need to type-annotate our argument but what exactly do the type-annotate, so what you would  type-annotated with is what is called a data transfer object, so
     * bassicly the data transfer objects represent a schema that represent  and defines the that data will be sent over the network.
     * so to make things sample we bassicaly going to represent the request body , so lets say if we are building a registration form we need to make sure the user provides a username, password , email and maybe their full-name
     * so what will do is create a data transfer object that literally defines all those proprties and their data types,
     * and we would use that to type-annotate 
           ** */

    /*****we need to determine the DTO (Data Transfer Object) schema. A DTO is an object that defines how the data will be sent over the network. */
    @Post('create')
    createUser2(@Body() userData: CreateUserDto){
        console.log(userData)
        return {}

    }

    /********route parameter*/
    @Get(':id')
    getUserById(@Param('id') id: string)
    {
        console.log(id);
        return{id};
    }

    @Get('query')
    getUsers3(@Query('sortBy') sortBy: string)
    {
        return [{username: 'fjk', email: "test1@gmail.com"},{username: "cde", email: "test2@gmail.com"}]
    }

    /*********Query parameters : with query parameters in express we will reference request dot query but in nestJs we have a decorated called query that allows you to extract the query parameters
     * the query parameters are best for filtering by the users (his email or username)
     * so query parameters are best used for doing actions such as feltering so for example you want to filter users based on what the first alphabets starts with, 
     * you can sorts by alphabetical order , or you know which user was created first  
     */





}


// to handle a GET request the first thing that you are going to do inside your controller is define a method 