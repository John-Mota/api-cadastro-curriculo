import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curriculum } from '../entitys/curriculum.entity';
import { CurriculumRepository } from '../repositories/curriculum.repository';
import { CurriculumService } from './curriculum.service';
import { CurriculumController } from './curriculum.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Curriculum, CurriculumRepository])],
  providers: [CurriculumService, CurriculumRepository], // Adicione o CurriculumRepository aqui
  controllers: [CurriculumController],
  exports: [CurriculumService],
})
export class CurriculumModule {}
