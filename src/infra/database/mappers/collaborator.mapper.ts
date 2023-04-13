import { Address, Document } from 'src/domain/value-objects';
import { Collaborator, Department, Group } from 'src/domain/entities';
import {
  Collaborators as RawCollaborators,
  Groups as rawGroups,
} from '@prisma/client';
import { PrismaGroupMapper } from './group.mapper';

export class PrismaCollaboratorMapper {
  static toPrisma(collaborator: Collaborator) {
    return {
      id: collaborator.id,
      name: collaborator.name,
      email: collaborator.email,
      age: collaborator.age,
      group: collaborator.groupId,
      login: collaborator.login,
      password: collaborator.password,
      description: collaborator.description,
      active: collaborator.active,
      created_at: collaborator.createdAt,
      updated_at: collaborator.updatedAt,
    };
  }

  static toDomain(
    raw: RawCollaborators,
    _documents: Document,
    _address: Address,
    _department: Department[],
    _group: rawGroups,
  ): Collaborator {
    return new Collaborator(
      {
        name: raw.name,
        email: raw.email,
        age: raw.age,
        groupId: raw.group_id,
        login: raw.login,
        password: raw.password,
        description: raw.description,
        active: raw.active,
        createdAt: raw.created_at,
        updatedAt: raw.updated_at,
      },
      _documents,
      _address,
      _department,
      PrismaGroupMapper.toDomain(_group),
      raw.id,
    );
  }
}
