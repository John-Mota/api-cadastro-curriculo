import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Curriculo } from './entities/curriculo.entity';
import { CandidatoDTO } from './dto/create-curriculo.dto';
import { UpdateCurriculoDto } from './dto/update-curriculo.dto';

@Injectable()
export class CurriculosService {
  constructor(
    @InjectRepository(Curriculo)
    private curriculoRepository: Repository<Curriculo>,
  ) {}

  async create(createCurriculoDto: CandidatoDTO) {
    const curriculo = this.curriculoRepository.create(createCurriculoDto);
    return this.curriculoRepository.save(curriculo);
  }

  async findAll() {
    return this.curriculoRepository.find();
  }

  async findOne(id: number) {
    return this.curriculoRepository.findOne({ where: { id } });
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
    await this.curriculoRepository.delete(id);
  }
}
