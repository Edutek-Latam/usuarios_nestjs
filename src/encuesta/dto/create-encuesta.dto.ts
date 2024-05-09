import { IsArray, IsNumber, IsObject, IsString } from "class-validator";

export class CreateEncuestaDto {

    @IsNumber()   
    numero: number;

   @IsString()
    pregunta: string

    @IsObject()
    respuestas:any

    @IsNumber()
    punteo: number


}
