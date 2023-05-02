import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Curriculo } from './curriculo.entity';

@Entity('competencias')
export class Competencia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @Column()
  nivel: string;

  @ManyToOne(() => Curriculo, (curriculo) => curriculo.competencias)
  curriculo: Curriculo;
}
