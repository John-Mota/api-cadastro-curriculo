import { EntityRepository, Repository } from 'typeorm';
import { Competencia } from './competencias.entity';

@EntityRepository(Competencia)
export class CompetenciaRepository extends Repository<Competencia> {}
