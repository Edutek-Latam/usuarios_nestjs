import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsInt, IsOptional, IsString } from 'class-validator';
import { Optional } from '@nestjs/common';

export class UpdateUserDto extends PartialType(CreateUserDto) {

    @Optional()
    @IsString()
    firstname: string;

    @Optional()
    @IsString()
    lastname: string;

    @IsOptional()
    @IsInt()
    phone:number;

    @Optional()
    @IsString()
    password: string;
    
    @Optional()
    @IsString()
    rol: string;
}
