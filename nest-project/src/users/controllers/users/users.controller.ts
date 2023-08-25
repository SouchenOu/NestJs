import { Controller, Get } from '@nestjs/common';


// a controller is define a method 
@Controller('users')
/******************************************Get request**************************** */
export class UsersController {
    // we want to use a decorator (the GET decorator)--> function decorator are basically just a function
    // we can pass an argument inside this Get() function to define the route for this endpoint

    // here we are creating a route (localhost:3000/users)
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
    /*Post request are used for creating a resource on the backend server so for example, if you were to create a register form, 
    that register form where the user submits there  data it is supposed to make a post request to the server
    so to handle post request  that we would do the same thing with GET request we would define a method*/




}


// to handle a GET request the first thing that you are going to do inside your controller is define a method 