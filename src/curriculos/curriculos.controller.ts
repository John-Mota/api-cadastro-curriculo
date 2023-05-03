import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { CurriculosService } from './curriculos.service';
import { CandidatoDTO } from './dto/create-curriculo.dto';
import { UpdateCurriculoDto } from './dto/update-curriculo.dto';

@Controller('curriculos')
export class CurriculosController {
  servico: any;
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

  @Get('/usuarios')
  async buscarPorCPF(@Query('cpf') cpf: string): Promise<[]> {
    return this.servico.buscarPorCPF(cpf);
  }

  @Put(':id/aprovacao')
  async updateAprovacao(
    @Param('id') id: string,
    @Body('aprovacao') aprovacao: string,
  ) {
    return this.curriculoService.updateAprovacao(+id, aprovacao);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.curriculoService.remove(+id);
  }
}
