import { Body, Controller, Post } from '@nestjs/common';
import { CurriculumDto } from 'src/dto/curriculo.dto';

@Controller('curriculum')
export class CurriculumController {
  @Post()
  create(@Body() curriculumDto: CurriculumDto) {
    console.log(curriculumDto);
    return curriculumDto;
  }
}
