import { PrimaryGeneratedColumn, Column, OneToMany, Entity } from 'typeorm';
import { Competencia } from './competencias.entity';

@Entity()
export class Curriculo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  cpf: string;

  @Column()
  dataNascimento: Date;

  @Column()
  email: string;

  @Column()
  telefone: string;

  @Column()
  escolaridade: string;

  @Column()
  funcao: string;

  @OneToMany(() => Competencia, (competencia) => competencia.candidato, {
    cascade: true,
  })
  competencias: Competencia[];
}
