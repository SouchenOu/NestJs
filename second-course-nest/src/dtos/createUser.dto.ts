import {IsNotEmpty, IsEmail,IsString, Length, min, max} from 'class-validator'


export  class createUserdto{

    @IsNotEmpty()
    // @Length(min: 3, max: 20, ValidationOptions: {groups:['create'] })
    username : string;
    
    //@IsEmail()
    @IsEmail()
    readonly email: string;

    // @IsString()
    country : string;
}