export class CandidatoDTO {
  nome: string;
  cpf: string;
  dataNascimento: Date;
  email: string;
  telefone: string;
  escolaridade: string;
  funcao: string;
  competencias: CompetenciaDTO[];
}

export interface CompetenciaDTO {
  descricao: string;
  nivel: string;
}
