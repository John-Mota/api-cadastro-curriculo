import { IsString, IsEmail, IsEnum, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export enum Escolaridade {
  AN, // Analfabeto
  FC, // Fundamental Completo
  MI, // Médio Incompleto
  MC, // Médio Completo
  SI, // Superior Incompleto
  SC, // Superior Completo
  ME, // Mestrado
  DO, // Doutorado
  IG, // Ignorado
}

class CompetenciaDto {
  @IsString()
  descricao: string;

  @IsEnum(['1', '2', '3', '4', '5'])
  nivel: '1' | '2' | '3' | '4' | '5';
}

export class CurriculumDto {
  @IsString()
  nome: string;

  @IsString()
  cpf: string;

  @IsString()
  dataNascimento: Date;

  @IsEmail()
  email: string;

  @IsString()
  telefone: string;

  @IsEnum(Escolaridade)
  escolaridade: Escolaridade;

  @IsString()
  funcao: string;

  @ValidateNested({ each: true })
  @Type(() => CompetenciaDto)
  competencias: CompetenciaDto[];
}
