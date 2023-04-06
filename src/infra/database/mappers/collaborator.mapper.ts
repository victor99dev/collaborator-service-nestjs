import { Collaborator } from 'src/domain/entities';
import {
  Collaborators as RawCollaborators,
  Documents as RawDocuments,
  Addresses as RawAddresses,
  Departments as RawDepartments,
  Groups as RawGroups,
} from '@prisma/client';

export class PrismaCollaboratorMapper {
  static toPrisma(collaborator: Collaborator) {
    return {
      name: collaborator.name,
      email: collaborator.email,
      age: collaborator.age,
      department_id: collaborator.departmentId,
      group_id: collaborator.groupId,
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
    rawDocuments: RawDocuments,
    rawAddresses: RawAddresses,
    rawDepartments: RawDepartments[],
    rawGroups: RawGroups,
  ): Collaborator {
    return new Collaborator({
      name: raw.name,
      email: raw.email,
      age: raw.age,
      departmentId: raw.department_id,
      groupId: raw.group_id,
      login: raw.login,
      password: raw.password,
      description: raw.description,
      active: raw.active,
      createdAt: raw.created_at,
      updatedAt: raw.updated_at,
    });
  }
}
