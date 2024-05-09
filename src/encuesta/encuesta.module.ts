import { Module } from '@nestjs/common';
import { EncuestaService } from './encuesta.service';
import { EncuestaController } from './encuesta.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Encuesta, EncuestaSchema } from './schema/encuesta.schema';
import { RespuestaSchema, Respuestas } from './schema/respuestas.schema';

@Module({
  imports:[MongooseModule.forFeature([
    {name: Encuesta.name, schema: EncuestaSchema},
    {name: Respuestas.name, schema: RespuestaSchema}
  ])],
  controllers: [EncuestaController],
  providers: [EncuestaService],
})
export class EncuestaModule {}
