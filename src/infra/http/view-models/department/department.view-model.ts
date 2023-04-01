import { Department } from 'src/domain/entities';

export class DepartmentViewModel {
  static toHttp(department: Department) {
    return {
      id: department.id,
      name: department.name,
      description: department.description,
      active: department.active,
      created_at: department.createdAt,
      updated_at: department.updatedAt,
    };
  }
}
