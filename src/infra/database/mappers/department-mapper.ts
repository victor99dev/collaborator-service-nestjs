import { Department } from 'src/domain/entities';
import { Departments as RawDepartments } from '@prisma/client';

export class PrismaDepartmentMapper {
  static toPrisma(department: Department) {
    return {
      id: department.id,
      name: department.name,
      description: department.description,
      active: department.active,
      created_at: department.createdAt,
      updated_at: department.updatedAt,
    };
  }

  static toDomain(raw: RawDepartments): Department {
    return new Department(
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
