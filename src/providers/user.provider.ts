import { Inject, Provider } from "@nestjs/common";
import {Connection} from 'typeorm';
import {user} from 'src/entity/user.entity'

export const userProvider: Provider[]=[
    {
        provide:"USER_REPOSITORY",
        useFactory:(connection:Connection)=>
            connection.getRepository(user),
            inject:["DATABASE_CONNECTION"]
        
    }
]