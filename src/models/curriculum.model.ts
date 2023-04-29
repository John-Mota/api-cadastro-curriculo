// curriculum.model.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Candidato } from './candidato.model';

@Entity()
export class Curriculum {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  formacaoAcademica: string;

  @Column()
  experienciaProfissional: string;

  @ManyToOne(() => Candidato, (candidato) => candidato.curriculos)
  candidato: Candidato;
}
