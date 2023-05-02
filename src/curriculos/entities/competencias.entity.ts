import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Curriculo } from './curriculo.entity';

@Entity()
export class Competencia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @Column()
  nivel: string;

  @ManyToOne((type) => Curriculo, (curriculo) => curriculo.competencias, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'curriculo_id' })
  curriculo: Curriculo;
}
