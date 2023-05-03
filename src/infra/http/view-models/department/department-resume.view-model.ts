import { Department } from 'src/domain/entities';

export class DepartmentResumeViewModel {
  static toHttp(department: Department) {
    return {
      id: department.id,
      name: department.name,
      description: department.description,
    };
  }
}
