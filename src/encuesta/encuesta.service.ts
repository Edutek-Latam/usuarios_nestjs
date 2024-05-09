import { Injectable } from '@nestjs/common';
import { CreateEncuestaDto } from './dto/create-encuesta.dto';
import { UpdateEncuestaDto } from './dto/update-encuesta.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Encuesta, EncuestaDocument } from './schema/encuesta.schema';
import { Model } from 'mongoose';
import { RespuestaDocument, Respuestas } from './schema/respuestas.schema';
import { CreateRespuestaDto } from './dto/create-respuesta.dto ';
import { CreatePreguntaDto } from './dto/create-pregunta.dto';

@Injectable()
export class EncuestaService {

  constructor(@InjectModel(Encuesta.name) private _encuesta : Model<EncuestaDocument>,
    @InjectModel(Respuestas.name) private _respuesta:Model<RespuestaDocument>
  ){}
  async create(createEncuestaDto: CreateEncuestaDto) {
    const pregunta = new this._encuesta(createEncuestaDto);
    return pregunta.save()
  }

  async createRespuesta(createEncuestaDto: CreatePreguntaDto) {
    console.log(createEncuestaDto)
    const pregunta = new this._respuesta(createEncuestaDto);
    return pregunta.save()
  }

  async findAll() {
      return this._encuesta.find({},{_id:0,createdAt:0,updatedAt:0});
    //return `This action returns all encuesta`;
  }

  async findOne(numero: number) {
    const pregunta = await  this._encuesta.findOne({numero},{_id:0,createdAt:0,updatedAt:0})
    return pregunta
    //return `This action returns a #${id} encuesta`;
  }

  async update(numero: number, updateEncuestaDto: UpdateEncuestaDto) {
    //const pregunta = this.findOne(numero);
    const preguntaUpdate = await this._encuesta.findOneAndUpdate({numero},{...updateEncuestaDto},{upsert:true,new:true})
    return preguntaUpdate
    //eturn `This action updates a #${id} encuesta`;
  }

  async  remove(numero: number) {
    const preguntaDelete = await this._encuesta.findOneAndDelete({numero})
    return preguntaDelete;
  }
}
