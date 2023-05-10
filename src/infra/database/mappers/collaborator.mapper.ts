import { Collaborator } from 'src/domain/entities';
import {
  Collaborators as RawCollaborators,
  Groups as RawGroups,
  Departments as RawDepartments,
  Addresses as RawAddresses,
  Documents as RawDocuments,
  Contacts as RawContacts,
} from '@prisma/client';
import { PrismaGroupMapper } from './group.mapper';
import { PrismaDepartmentMapper } from './department.mapper';
import { PrismaAddressMapper } from './address.mapper';
import { PrismaDocumentMapper } from './documents.mapper';
import { PrismaContactMapper } from './contact.mappper';

export class PrismaCollaboratorMapper {
  static toPrisma(collaborator: Collaborator) {
    return {
      id: collaborator.id,
      name: collaborator.name,
      age: collaborator.age,
      contact: collaborator.contact,
      department: collaborator.department,
      group: collaborator.group,
      address: collaborator.address,
      document: collaborator.document,
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
    document: RawDocuments,
    address: RawAddresses,
    department: RawDepartments,
    group: RawGroups,
    contact: RawContacts,
  ): Collaborator {
    return new Collaborator(
      {
        name: raw.name,
        age: raw.age,
        contact: PrismaContactMapper.toDomain(contact),
        group: PrismaGroupMapper.toDomain(group),
        department: PrismaDepartmentMapper.toDomain(department),
        address: PrismaAddressMapper.toDomain(address),
        document: PrismaDocumentMapper.toDomain(document),
        login: raw.login,
        password: raw.password,
        description: raw.description,
        active: raw.active,
        createdAt: raw.created_at,
        updatedAt: raw.updated_at,
      },
      raw.id,
    );
  }
}
