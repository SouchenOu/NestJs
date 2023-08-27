import { PartialType } from "@nestjs/mapped-types";
import { createUserdto } from "./createUser.dto";


// ? : optional attribute
// export  class updateUserdto{


//     username? : string;
    
//     email?: string;

//     country? : string;
// }


// we can inherit from createUser.dto and change the attribute from required to optional by using PartialType

export class updateUserdto extends PartialType(createUserdto){}


