import { ApiParam, ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsDateString, IsEmail, IsEnum, IsInt, IsString, MinLength } from "class-validator";

export class CreateUserDto {
  
   /*  @Transform(({value})=>{
        console.log(value)
        return value.toUpperCase();
    }) */
    
    @ApiProperty({description:"Primer nombre", default:"Juan"})
    @IsString()
    @MinLength(3)

    firstname: string;

    @ApiProperty({default:'Gonzalez'})
    @IsString()
    @MinLength(3)
    lastname: string;

    @ApiProperty({default:'correo@gmail.com'})
    @IsEmail()
    email: string;

    @ApiProperty({default:'59194817'})
    @IsInt()
    phone:number;

    @ApiProperty()
    @IsString()
    @MinLength(6)
    password: string;
    
    @ApiProperty({default:'user'})
    @IsString()
    rol: string;
    
    /* @IsDateString()
    fecha_nac: Date; */
}
