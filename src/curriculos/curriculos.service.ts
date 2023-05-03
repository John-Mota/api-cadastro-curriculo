import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Curriculo } from './entities/curriculo.entity';
import { CandidatoDTO } from './dto/create-curriculo.dto';
import { UpdateCurriculoDto } from './dto/update-curriculo.dto';
import { Competencia } from './entities/competencias.entity';

@Injectable()
export class CurriculosService {
  constructor(
    @InjectRepository(Curriculo)
    private curriculoRepository: Repository<Curriculo>,
    @InjectRepository(Competencia)
    private competenciaRepository: Repository<Competencia>,
  ) {}

  async create(createCurriculoDto: CandidatoDTO) {
    const curriculo = createCurriculoDto;
    this.curriculoRepository.save(curriculo);

    return curriculo;
  }

  async findAll() {
    return this.curriculoRepository.find({
      relations: ['competencias'],
    });
  }

  async findOne(id: number) {
    const curriculo = await this.curriculoRepository.findOne({
      where: { id },
      relations: ['competencias'],
    });
    return curriculo;
  }

  async findByCpf(cpf: string) {
    const curriculo = await this.curriculoRepository.findOne({
      where: { cpf },
      relations: ['competencias'],
    });
    return curriculo;
  }

  async updateAprovacao(id: number, aprovacao: string) {
    const curriculo = await this.curriculoRepository.findOne({ where: { id } });
    if (!curriculo) {
      throw new Error('Curriculo não encontrado');
    }
    curriculo.aprovacao = aprovacao;
    return this.curriculoRepository.save(curriculo);
  }

  async remove(id: number) {
    const curriculo = await this.curriculoRepository.findOne({ where: { id } });
    if (!curriculo) {
      throw new NotFoundException(`curriculum ID ${id} NOT FOUND`);
    }
    await this.curriculoRepository.remove(curriculo);
  }
}
