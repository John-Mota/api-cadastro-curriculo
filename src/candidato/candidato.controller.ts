import { Controller, Get } from '@nestjs/common';

@Controller('candidato')
export class CandidatoController {
  @Get()
  findAll(): string {
    return 'lista de candidato';
  }
}
