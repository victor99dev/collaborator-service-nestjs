import { Group } from 'src/domain/entities';

export class ListGroupViewModel {
  static toHttpList(group: Group[]) {
    const _groups: unknown[] = [];
    group.forEach((_group) => {
      const viewModel = {
        id: _group.id,
        name: _group.name,
        description: _group.description,
        active: _group.active,
        created_at: _group.createdAt,
        updated_at: _group.updatedAt,
      };
      _groups.push(viewModel);
    });
    return _groups;
  }
}
