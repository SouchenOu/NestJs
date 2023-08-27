import {IsNotEmpty, IsEmail } from 'class-validator'


export  class createUserdto{

    @IsNotEmpty()
    username : string;
    
    @IsEmail()
    email: string;

    country : string;
}