import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";


import { HydratedDocument } from 'mongoose';

export type RespuestaDocument = HydratedDocument<Respuestas>;

@Schema({collection:'respuestas', timestamps: true, versionKey:false})
export class Respuestas {
    
    @Prop({required: true})
    codigo_alumno: number;


    @Prop(raw([{
        pregunta: { type: String },
        respuesta: { type: String},
        punteo: {type: Number}
      }]))
    respuesta:any





}

export const RespuestaSchema = SchemaFactory.createForClass(Respuestas)