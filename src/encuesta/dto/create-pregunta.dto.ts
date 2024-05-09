import { IsArray, IsNumber, IsObject, IsString } from "class-validator";
import { CreateRespuestaDto } from "./create-respuesta.dto ";
import { Type } from "class-transformer";

export class CreatePreguntaDto {

   @IsArray()
   //@Type(()=>CreateRespuestaDto)
   respuesta: CreateRespuestaDto[];

   @IsNumber()
   codigo_alumno: number


}
