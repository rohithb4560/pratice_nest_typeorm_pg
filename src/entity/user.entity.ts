
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
@Entity()
export class user{
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    firstname:string;
    @Column()
    lastname:string;
    @Column()
    age:number;
    @Column()
    email:string;
    @Column()
    phoneNumber:number;
    

}