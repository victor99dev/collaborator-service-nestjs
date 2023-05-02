import { Group } from 'src/domain/entities';

export class GroupResumeViewModel {
  static toHttp(group: Group) {
    return {
      id: group.id,
      name: group.name,
      description: group.description,
    };
  }
}
