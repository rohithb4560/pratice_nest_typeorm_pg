
import {createConnection}  from "typeorm";
import {user} from 'src/entity/user.entity'


export const databaseProvider=[
    {
        provide:'DATABASE_CONNECTION',
        useFactory: async()=>
            await createConnection({
                type:'postgres',
                host:"tiny.db.elephantsql.com",
                port:5432,
                username:'khdhjvyq',
                password:'V8_5MP51J4riSysg6H_R38-VMIMkxh3F',
                database:'khdhjvyq',
                entities:[user],
                synchronize:true


            })
        
    },
];