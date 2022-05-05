import {Body, Controller, Get, Post,Param, Delete } from "@nestjs/common";
import { userService } from "./user.service";
import {user} from 'src/entity/user.entity'

@Controller()
export class userController{
    constructor(private userservice:userService){}
    @Get()
    getAllUsers(): Promise<user[]>{
        return this.userservice.getUsers();
    }
    @Post()
    create(@Body() userdata:user){
        return this.userservice.addUser(userdata)
    }
    @Get(":id")
    getOneUser(@Param('id')id:string): Promise<user>{
        return this.userservice.findOne(Number(id));    
    }
    @Delete(":id")
    deleteUser(@Param('id')id:string): Promise<user>{
        return this.userservice.delete(Number(id));
    }
    

}