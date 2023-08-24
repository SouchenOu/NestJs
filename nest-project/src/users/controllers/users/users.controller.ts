import { Controller, Get } from '@nestjs/common';


// a controller is define a method 
@Controller('users')
export class UsersController {
    // we want to use a decorator (the GET decorator)--> function decorator are basically just a function
    // we can pass an argument inside this Get() function to define the route for this endpoint
    @Get()
    // we are inside a class, i'm going a head and name my method 
    getUsers(){

        return { username: 'souchen', email: 'souchen@gmail.com'};
    }
    // lets create another get request
    @Get('posts')
    getUsersPosts(){
        return [
            {
                username: 'soukaina',
                email:'souka@gmail.com'
                posts: [
                    {
                        id: 1,
                        
                    }
                ]
            }
        ]

    }
}


// to handle a GET request the first thing that you are going to do inside your controller is define a method 