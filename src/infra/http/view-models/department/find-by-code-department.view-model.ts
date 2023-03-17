import { Departments } from 'src/domain/entities';

export class GetDepartmentIdViewModel {
  static toHttp(department: Departments) {
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