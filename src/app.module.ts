import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurriculosController } from './curriculos/curriculos.controller';
import { CurriculosModule } from './curriculos/curriculos.module';
import { CurriculosService } from './curriculos/curriculos.service';
import { CurriculoRepository } from './curriculos/entities/curriculo.repository';
import { CompetenciaRepository } from './curriculos/entities/competencia.repository';
import { Curriculo } from './curriculos/entities/curriculo.entity';
import { Competencia } from './curriculos/entities/competencias.entity';

@Module({
  imports: [
    CurriculosModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'cadastrocurriculum',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Curriculo, Competencia]),
  ],
  controllers: [CurriculosController],
  providers: [CurriculosService, CurriculoRepository, CompetenciaRepository],
})
export class AppModule {}
