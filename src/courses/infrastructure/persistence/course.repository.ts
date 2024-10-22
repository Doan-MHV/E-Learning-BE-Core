import { DeepPartial } from '../../../utils/types/deep-partial.type';
import { NullableType } from '../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { Course } from '../../domain/course';

export abstract class CourseRepository {
  abstract create(
    data: Omit<Course, 'id' | 'createdAt' | 'deletedAt' | 'updatedAt'>,
  ): Promise<Course>;

  abstract findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Course[]>;

  abstract findById(id: Course['id']): Promise<NullableType<Course>>;

  abstract findByIds(ids: Course['id'][]): Promise<Course[]>;

  abstract update(
    id: Course['id'],
    payload: DeepPartial<Course>,
  ): Promise<Course | null>;

  abstract remove(id: Course['id']): Promise<void>;
}
