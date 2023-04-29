import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Escolaridade } from '../dto/curriculo.dto';

@Entity()
export class Curriculum {
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

  @Column({
    type: 'enum',
    enum: Escolaridade,
  })
  escolaridade: Escolaridade;

  @Column()
  funcao: string;

  @Column('jsonb')
  competencias: {
    descricao: string;
    nivel: '1' | '2' | '3' | '4' | '5';
  }[];
}
