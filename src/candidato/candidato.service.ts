import { Injectable } from '@nestjs/common';
import { CurriculumService } from 'src/curriculum/curriculum.service';
import { Curriculum } from 'src/entitys/curriculum.entity';

@Injectable()
export class CandidatoService {
  constructor(private readonly curriculumService: CurriculumService) {}

  async findAll(): Promise<Curriculum[]> {
    return this.curriculumService.findAll();
  }

  async findOne(id: number): Promise<Curriculum> {
    return this.curriculumService.findOne(id);
  }
}
