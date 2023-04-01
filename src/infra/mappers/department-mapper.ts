import { Departments } from 'src/domain/entities';
import { Departments as RawDepartments } from '@prisma/client';

export class PrismaDepartmentMapper {
  static toPrisma(department: Departments) {
    return {
      id: department.id,
      name: department.name,
      description: department.description,
      active: department.active,
      created_at: department.createdAt,
      updated_at: department.updatedAt,
    };
  }

  static toDomain(raw: RawDepartments): Departments {
    return new Departments(
      {
        name: raw.name,
        description: raw.description,
        active: raw.active,
        createdAt: raw.created_at,
        updatedAt: raw.updated_at,
      },
      raw.id,
    );
  }
}
