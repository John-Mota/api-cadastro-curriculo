export class CandidatoDTO {
  nome: string;
  cpf: string;
  dataNascimento: Date;
  email: string;
  telefone: string;
  escolaridade: string;
  funcao: string;
  competencias: {
    descricao: string;
    nivel: string;
  }[];
}
