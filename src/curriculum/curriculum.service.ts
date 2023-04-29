import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CurriculumDto } from 'src/dto/curriculo.dto';
import { Curriculum } from 'src/entitys/curriculum.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CurriculumService {
  constructor(
    @InjectRepository(Curriculum)
    private readonly curriculumRepository: Repository<Curriculum>,
  ) {}

  async create(curriculumDto: CurriculumDto): Promise<Curriculum> {
    const curriculum = new Curriculum();

    curriculum.nome = curriculumDto.nome;
    curriculum.cpf = curriculumDto.cpf;
    curriculum.dataNascimento = new Date(curriculumDto.dataNascimento);
    curriculum.email = curriculumDto.email;
    curriculum.telefone = curriculumDto.telefone;
    curriculum.escolaridade = curriculumDto.escolaridade;
    curriculum.funcao = curriculumDto.funcao;
    curriculum.competencias = curriculumDto.competencias;

    return this.curriculumRepository.save(curriculum);
  }

  async findAll(): Promise<Curriculum[]> {
    return this.curriculumRepository.find();
  }

  async findOne(id: number): Promise<Curriculum> {
    return this.curriculumRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.curriculumRepository.delete(id);
  }
}