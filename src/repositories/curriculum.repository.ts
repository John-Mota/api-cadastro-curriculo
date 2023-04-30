import { EntityRepository, Repository } from 'typeorm';
import { Curriculum } from '../entitys/curriculum.entity';

@EntityRepository(Curriculum)
export class CurriculumRepository extends Repository<Curriculum> {
  async createCurriculum(curriculum: Curriculum): Promise<Curriculum> {
    return this.save(curriculum);
  }

  async getAllCurriculums(): Promise<Curriculum[]> {
    return this.find();
  }

  async getCurriculumById(id: number): Promise<Curriculum> {
    return this.findOne({ where: { id } });
  }

  async updateCurriculum(
    id: number,
    curriculum: Curriculum,
  ): Promise<Curriculum> {
    await this.update(id, curriculum);
    return this.getCurriculumById(id);
  }

  async deleteCurriculum(id: number): Promise<void> {
    await this.delete(id);
  }
}
