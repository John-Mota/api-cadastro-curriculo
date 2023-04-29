import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CandidatoController } from './candidato/candidato.controller';
import { CandidatoModule } from './candidato/candidato.module';
import { CurriculumModule } from './curriculum/curriculum.module';
import { TypeOrmModule } from '@nestjs/typeorm';

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
      entities: [__dirname + '/**/*.entity.js'],
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController, CandidatoController],
  providers: [AppService],
})
export class AppModule {}
