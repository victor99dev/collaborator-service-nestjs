import { Departments } from 'src/domain/entities';

export class ListdepartmentViewModel {
  static toHttpList(department: Departments[]) {
    const _departments: unknown[] = [];
    department.forEach((_department) => {
      const viewModel = {
        id: _department.id,
        name: _department.name,
        description: _department.description,
        active: _department.active,
        created_at: _department.createdAt,
        updated_at: _department.updatedAt,
      };
      _departments.push(viewModel);
    });
    return _departments;
  }
}
