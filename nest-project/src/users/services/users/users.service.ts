import { Injectable } from '@nestjs/common';
import { createUserType } from 'src/users/utils/types';

/* this @Injectable() is very important because every service must have this injectable decorator, and that basically just means that 
this class is a provider and you can actually use dependency injection, nest will be able to use dependency injection to inject this service 
any where in your application that needs it, for example if you want to create another controller that needs the user service instead of creating a new instance
of user service  it would actually take the already created instance that  is managed by the ioc container which stands for inversion of control container, 
it is going to be managed by the container and it is going to take that instance from the container and inject it into the controller that needs it or anywhere else you need in your application   */



// oker right now our controller needs our users service so lets go ahead and inject it inside the user is controller

/*******@Injectable() is how you tell Nest this is a class that can have dependencies that should be instantiated by Nest and its DI system.  */
@Injectable()
export class UsersService 
{
    private fackUsers = [{username: 'soukayna', email: 'souka@gmail.com'}, {username: 'asmaa', email: 'asmaa@gmail.com'}, {username: 'khawla', email: 'khawla@gmail.com'}]
    // it is going to return a fake database
    fetchUsers(){
            return this.fackUsers;
    }
    createUser(userDetails: createUserType) {
        this.fackUsers.push(userDetails)
    }
    fetchUserById(id : number)
    {
        return {id, username: 'ahmed', email: 'ahmed@gmail.com'}
    }
}
