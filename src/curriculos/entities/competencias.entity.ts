import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Curriculo } from './curriculo.entity';

@Entity()
export class Competencia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @Column()
  nivel: string;

  @ManyToOne(() => Curriculo, (candidato) => candidato.competencias)
  candidato: Curriculo;
}
