import { Injectable } from '@nestjs/common';

/* this @Injectable() is very important because every service must have this injectable decorator, and that basically just means that 
this class is a provider and you can actually use dependency injection, nest will be able to use dependency injection to inject this service 
any where in your application that needs it, for example if you want to create another controller that needs the user service instead of creating a new instance
of user service  it would actually take the already created instance that  is managed by the ioc container which stands for inversion of control container, 
it is going to be managed by the container and it is going to take that instance from the container and inhect it into the controller that needs it or anywhere else you need in your application   */

@Injectable()
export class UsersService {}
