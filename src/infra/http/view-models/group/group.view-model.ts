import { Group } from 'src/domain/entities';

export class GroupViewModel {
  static toHttp(group: Group) {
    return {
      id: group.id,
      name: group.name,
      description: group.description,
      active: group.active,
      created_at: group.createdAt,
      updated_at: group.updatedAt,
    };
  }
}
