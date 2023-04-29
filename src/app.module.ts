import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CandidatoModule } from './candidato/candidato.module';
import { CurriculumModule } from './curriculum/curriculum.module';
import { CurriculumRepository } from './repositories/curriculum.repository';
import { CurriculumService } from './curriculum/curriculum.service';
import { CandidatoController } from './candidato/candidato.controller';
import { CandidatoService } from './candidato/candidato.service';

@Module({
  imports: [
    CandidatoModule,
    CurriculumModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'cadastrocurriculum',
      entities: [__dirname + '/**/*.entity.js', CurriculumRepository],
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([CurriculumRepository]), // Adicione esta linha
  ],
  controllers: [AppController, CandidatoController],
  providers: [AppService, CurriculumService, CandidatoService],
})
export class AppModule {}
