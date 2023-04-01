import { Group } from 'src/domain/entities';
import { Groups as RawGroups } from '@prisma/client';

export class PrismaGroupMapper {
  static toPrisma(group: Group) {
    return {
      id: group.id,
      name: group.name,
      description: group.description,
      active: group.active,
      created_at: group.createdAt,
      updated_at: group.updatedAt,
    };
  }

  static toDomain(raw: RawGroups): Group {
    return new Group(
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
