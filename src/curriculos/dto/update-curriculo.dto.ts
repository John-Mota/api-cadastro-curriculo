import { PartialType } from '@nestjs/mapped-types';
import { CandidatoDTO } from './create-curriculo.dto';

export class UpdateCurriculoDto extends PartialType(CandidatoDTO) {}
