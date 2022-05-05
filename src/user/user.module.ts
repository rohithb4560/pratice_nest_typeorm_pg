import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { databaseProvider } from "src/providers/database.providers";
import { userProvider } from "src/providers/user.provider";
import { userController } from "./user.controller";
import { userService } from "./user.service";

@Module({
    imports:[
        DatabaseModule
    ],
    controllers:[userController],
    providers:[...userProvider,userService],

})
export class userModule{}