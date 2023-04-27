import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CandidatoController } from './candidato/candidato.controller';
import { CandidatoModule } from './candidato/candidato.module';

@Module({
  imports: [CandidatoModule],
  controllers: [AppController, CandidatoController],
  providers: [AppService],
})
export class AppModule {}
