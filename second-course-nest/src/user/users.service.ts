import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";
import { createUserdto } from "src/dtos/createUser.dto";
import { updateUserdto } from "src/dtos/update-user.dto";
import { v4 as uuid} from 'uuid';

// this is the business logique of our instance users

@Injectable()
export class UserServives
{
    private readonly users : UserEntity[] = [];
    findUsers() : UserEntity[] {
        return this.users;
       
    }

    findUserById(id : string) : UserEntity
    { 
        return this.users.find((user) => user.id === id);
    }
    createUser(createUserdto : createUserdto) : UserEntity
    {
        const newUser : UserEntity = {
            ...createUserdto,
            id: uuid(),
        };
        this.users.push(newUser);
        return newUser
    }
    updateUser(id : string, updateUserDto : updateUserdto) : UserEntity
    {
        const index = this.users.findIndex((user) => user.id === id)
        this.users[index] = { ...this.users[index], ...updateUserdto}
        return this.users[index]
    }
    deleteUser(id: string) : UserEntity []
    {
        const newUser = this.users.filter((user) => user.id !== id)
        return newUser
    }

}