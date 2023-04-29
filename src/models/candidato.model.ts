// candidato.model.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Curriculum } from './curriculum.model';

@Entity()
export class Candidato {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => Curriculum, (curriculum) => curriculum.candidato)
  curriculos: Curriculum[];
}
