import {IsNotEmpty, IsEmail} from 'class-validator'

// firsty we are going to create a class and then we going to define all of the properties that we will need 



/*****The username and email is the user must send to our API so for username we are gonna use a decorator callsed isNotEmpty() this comes from the class validator library   ** */

export class CreateUserDto {
    // this just validate that the username property is not empty
    @IsNotEmpty()
    username: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

}