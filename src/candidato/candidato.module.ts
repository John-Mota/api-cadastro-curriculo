import { Module } from '@nestjs/common';
import { CandidatoService } from './candidato.service';
import { CurriculumService } from '../curriculum/curriculum.service';
import { CurriculumRepository } from '../repositories/curriculum.repository';

@Module({
  providers: [CandidatoService, CurriculumService, CurriculumRepository],
  exports: [CandidatoService], // adicionando a exportação do CandidatoService
})
export class CandidatoModule {}
