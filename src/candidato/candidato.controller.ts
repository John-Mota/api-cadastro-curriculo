import { Controller, Get, Param } from '@nestjs/common';
import { CurriculumService } from 'src/curriculum/curriculum.service';
import { Curriculum } from 'src/entitys/curriculum.entity';

@Controller('candidato')
export class CandidatoController {
  constructor(private readonly curriculumService: CurriculumService) {}

  @Get()
  async findAll(): Promise<Curriculum[]> {
    const candidatos = await this.curriculumService.findAll();
    return { candidatos };
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Curriculum> {
    return this.curriculumService.findOne(+id);
  }
}
