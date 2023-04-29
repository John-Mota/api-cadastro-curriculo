import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { CurriculumDto } from 'src/dto/curriculo.dto';
import { Curriculum } from 'src/entitys/curriculum.entity';
import { CurriculumService } from './curriculum.service';

@Controller('curriculum')
export class CurriculumController {
  constructor(private curriculumService: CurriculumService) {}
  @Post()
  async create(
    @Body() createCurriculumDto: CurriculumDto,
  ): Promise<Curriculum> {
    console.log(createCurriculumDto);
    return this.curriculumService.create(createCurriculumDto);
  }

  @Get()
  findAll(): Promise<Curriculum[]> {
    return this.curriculumService.findAll();
  }

  @Get(':id')
  finOne(@Param('id') id: string): Promise<Curriculum> {
    return this.curriculumService.findOne(+id);
  }
}
