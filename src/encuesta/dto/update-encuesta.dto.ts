import { PartialType } from '@nestjs/mapped-types';
import { CreateEncuestaDto } from './create-encuesta.dto';
import { IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

export class UpdateEncuestaDto extends PartialType(CreateEncuestaDto) {
   
    @IsOptional()
   @IsString()
    pregunta: string

    @IsOptional()
    @IsObject()
    respuestas:any


    @IsOptional()
    @IsNumber()
    punteo: number
}
