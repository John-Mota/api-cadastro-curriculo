import { Module } from '@nestjs/common';
import { CandidatoService } from './candidato.service';
import { CurriculumModule } from 'src/curriculum/curriculum.module';

@Module({
  providers: [CandidatoService],
  exports: [CandidatoService], // adicionando a exportação do CandidatoService
  imports: [CurriculumModule],
})
export class CandidatoModule {}
