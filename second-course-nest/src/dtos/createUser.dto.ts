import {IsNotEmpty, IsEmail,IsString } from 'class-validator'


export  class createUserdto{

    @IsNotEmpty()
    username : string;
    
    @IsEmail()
    email: string;
    
    @IsString()
    country : string;
}