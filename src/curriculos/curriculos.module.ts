import { Module } from '@nestjs/common';
import { CurriculosService } from './curriculos.service';
import { CurriculosController } from './curriculos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curriculo } from './entities/curriculo.entity';
import { Competencia } from './entities/competencias.entity';
import { CompetenciaRepository } from './entities/competencia.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Curriculo,
      Competencia,
      CompetenciaRepository,
      CompetenciaRepository,
    ]),
  ],
  providers: [CurriculosService],
  controllers: [CurriculosController],
})
export class CurriculosModule {}
