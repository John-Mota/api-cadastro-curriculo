import { EntityRepository, Repository } from 'typeorm';
import { Curriculum } from '../entitys/curriculum.entity';

@EntityRepository(Curriculum)
export class CurriculumRepository extends Repository<Curriculum> {}
