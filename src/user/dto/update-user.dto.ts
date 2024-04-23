import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {

    @IsString()
    firstname: string;

    @IsString()
    lastname: string;

    @IsOptional()
    @IsInt()
    phone:number;

    @IsString()
    password: string;
    
    @IsString()
    rol: string;
}
