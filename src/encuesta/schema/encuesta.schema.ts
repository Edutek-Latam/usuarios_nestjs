import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";


import { HydratedDocument } from 'mongoose';

export type EncuestaDocument = HydratedDocument<Encuesta>;

@Schema({collection:'encuesta', timestamps: true, versionKey:false})
export class Encuesta {
    
    @Prop({required: true})
    numero: number;

    @Prop({required: true})
    pregunta: string


    @Prop(raw({
        respuesa1: { type: String },
        respuesa2: { type: String },
        respuesa3: { type: String}
      }))
    respuestas:any


    @Prop({type: Number})
    punteo: number



}

export const EncuestaSchema = SchemaFactory.createForClass(Encuesta)