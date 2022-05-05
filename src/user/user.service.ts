import { Inject, Injectable,NotFoundException } from "@nestjs/common";
import { Repository,InsertResult,DeleteResult } from "typeorm";
import {user} from 'src/entity/user.entity'

@Injectable()
export class userService{
    constructor(
        @Inject("USER_REPOSITORY")
        private userRepository:Repository<user>
        ){}
    async getUsers():Promise<user[]>{
        return this.userRepository.find()

    }
    async addUser(userdata:user):Promise<InsertResult>{
        return this.userRepository.insert(userdata);
    }
    async findOne(id: number):Promise<user>{
        return this.userRepository.findOneById(id);


    }
    async update(id:number,userdata:user):Promise<user>{
        const userUpdate = await this.findOne(id);
        if (userUpdate===undefined){
            throw new NotFoundException();
        }
        await this.userRepository.update(id,userdata)
        return this.findOne(id)
    }
    async delete(id:number): Promise<any>{
        const userUpdate = await this.findOne(id);
        if (userUpdate===undefined){
            throw new NotFoundException();
        }
        await this.userRepository.delete(id)
        
    }

}