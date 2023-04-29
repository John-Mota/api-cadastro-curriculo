import { Module } from '@nestjs/common';
import { CurriculumController } from './curriculum.controller';
import { CurriculumService } from './curriculum.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curriculum } from 'src/entitys/curriculum.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Curriculum])],
  controllers: [CurriculumController],
  providers: [CurriculumService],
})
export class CurriculumModule {}
