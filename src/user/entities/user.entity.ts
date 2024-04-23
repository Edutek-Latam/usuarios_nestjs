import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UUID } from "typeorm/driver/mongodb/bson.typings";

@Entity({name:'user'})
export class User {


    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column({type:'number',nullable:false})
    code: number;

    @Column({nullable:false})
    firstname: string;

    @Column({nullable:false})
    lastname: string;

    @Column({nullable:false, unique:true})
    email: string;

    @Column({nullable:true,name:'telefono'})
    phone:number;

    @Column({nullable: false})
    password: string;

    @Column({nullable:true, default: true,name:'is_active'})
    isActivo: boolean;

    @Column({nullable:true, default:false, name:'is_verify'})
    isVerify: boolean;
    
    @Column({nullable: false,default:'user'})
    rol: string;
}
