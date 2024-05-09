import { IsArray, IsNumber, IsObject, IsString } from "class-validator";

export class CreateRespuestaDto {

   @IsString() 
   pregunta: string;

   @IsString()
   respuesta: string;

   @IsNumber()
   punteo: number



}
