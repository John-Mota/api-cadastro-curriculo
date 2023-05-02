import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Curriculo } from './entities/curriculo.entity';
import { CandidatoDTO } from './dto/create-curriculo.dto';
import { UpdateCurriculoDto } from './dto/update-curriculo.dto';
import { Competencia } from './entities/competencias.entity';
import { CurriculoRepository } from './entities/curriculo.repository';
import { CompetenciaRepository } from './entities/competencia.repository';

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
    return this.curriculoRepository.find();
  }

  async findOne(id: number) {
    const curriculo = await this.curriculoRepository.findOne({
      where: { id },
    });
    return curriculo;
  }

  async update(id: number, updateCurriculoDto: UpdateCurriculoDto) {
    const curriculo = await this.curriculoRepository.findOne({ where: { id } });
    if (!curriculo) {
      throw new Error('Curriculo não encontrado');
    }
    this.curriculoRepository.merge(curriculo, updateCurriculoDto);
    return this.curriculoRepository.save(curriculo);
  }

  async remove(id: number) {
    const curriculo = await this.curriculoRepository.findOne({ where: { id } });
    if (!curriculo) {
      throw new Error('Curriculo não encontrado');
    }
    await this.curriculoRepository.remove(curriculo);
  }
}
