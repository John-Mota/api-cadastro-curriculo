import { EntityRepository, Repository } from 'typeorm';
import { Curriculo } from './curriculo.entity';

@EntityRepository(Curriculo)
export class CurriculoRepository extends Repository<Curriculo> {}
