import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CurriculumDto } from 'src/dto/curriculo.dto';
import { Curriculum } from 'src/entitys/curriculum.entity';
import { CurriculumRepository } from 'src/repositories/curriculum.repository';

@Injectable()
export class CurriculumService {
  constructor(
    @InjectRepository(CurriculumRepository)
    private readonly curriculumRepository: CurriculumRepository,
  ) {}
  async create(curriculumDto: CurriculumDto): Promise<Curriculum> {
    const curriculum = new Curriculum();
    curriculum.nome = curriculumDto.nome;
    curriculum.cpf = curriculumDto.cpf;
    curriculum.dataNascimento = curriculumDto.dataNascimento;
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
    return this.curriculumRepository.findOne({ where: { id: id } });
  }

  async remove(id: number): Promise<void> {
    await this.curriculumRepository.delete(id);
  }
}
