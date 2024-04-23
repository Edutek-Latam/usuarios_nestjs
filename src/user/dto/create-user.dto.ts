import { Transform } from "class-transformer";
import { IsDateString, IsEmail, IsEnum, IsInt, IsString, MinLength } from "class-validator";

export class CreateUserDto {
  
    @Transform(({value})=>{
        console.log(value)
        return value.toUpperCase();
    })
    @IsString()
    @MinLength(3)
    firstname: string;

    @IsString()
    @MinLength(3)
    lastname: string;

    @IsEmail()
    email: string;

    @IsInt()
    phone:number;

    @IsString()
    @MinLength(6)
    password: string;
    

    @IsString()
    rol: string;
    
    @IsDateString()
    fecha_nac: Date;
}
