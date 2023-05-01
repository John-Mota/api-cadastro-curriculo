import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CurriculosService } from './curriculos.service';
import { CandidatoDTO } from './dto/create-curriculo.dto';
import { UpdateCurriculoDto } from './dto/update-curriculo.dto';

@Controller('curriculos')
export class CurriculosController {
  constructor(private readonly curriculoService: CurriculosService) {}

  @Post()
  async create(@Body() createCurriculoDto: CandidatoDTO) {
    return this.curriculoService.create(createCurriculoDto);
  }

  @Get()
  async findAll() {
    return this.curriculoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.curriculoService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCurriculoDto: UpdateCurriculoDto,
  ) {
    return this.curriculoService.update(+id, updateCurriculoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.curriculoService.remove(+id);
  }
}
