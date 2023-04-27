import { IsString, IsEmail, IsEnum, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

enum Escolaridade {
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

  @IsEnum(['BAIXO', 'MEDIO', 'ALTO'])
  nivel: string;
}

export class CurriculumDto {
  @IsString()
  nome: string;

  @IsString()
  cpf: string;

  @IsString()
  dataNascimento: string;

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
