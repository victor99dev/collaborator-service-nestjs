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

  static toPrismaList(department: Department[]) {
    const departments: RawDepartments[] = [];
    department.forEach((_department) =>
      departments.push({
        id: _department.id,
        name: _department.name,
        description: _department.description,
        active: _department.active,
        created_at: _department.createdAt,
        updated_at: _department.updatedAt,
      }),
    );
    return departments;
  }

  static toDomainList(raw: RawDepartments[]): Department[] {
    const departments: Department[] = [];
    raw.forEach((department) => {
      const _department = new Department(
        {
          name: department.name,
          description: department.description,
          active: department.active,
          createdAt: department.created_at,
          updatedAt: department.updated_at,
        },
        department.id,
      );
      departments.push(_department);
    });
    return departments;
  }
}
