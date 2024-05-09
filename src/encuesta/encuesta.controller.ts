import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EncuestaService } from './encuesta.service';
import { CreateEncuestaDto } from './dto/create-encuesta.dto';
import { UpdateEncuestaDto } from './dto/update-encuesta.dto';
import { CreateRespuestaDto } from './dto/create-respuesta.dto ';
import { CreatePreguntaDto } from './dto/create-pregunta.dto';

@Controller('encuesta')
export class EncuestaController {
  constructor(private readonly encuestaService: EncuestaService) {}

  @Post('respuestas')
  createRespuesta(@Body() createRespuestasDto: CreatePreguntaDto) {
    console.log(createRespuestasDto)
    return this.encuestaService.createRespuesta(createRespuestasDto);
  }

  @Post()
  create(@Body() createEncuestaDto: CreateEncuestaDto) {
    return this.encuestaService.create(createEncuestaDto);
  }

  @Get()
  findAll() {
    return this.encuestaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.encuestaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEncuestaDto: UpdateEncuestaDto) {
    return this.encuestaService.update(+id, updateEncuestaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.encuestaService.remove(+id);
  }
}
