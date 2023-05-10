import { Collaborator } from 'src/domain/entities';
import { GetDocumentViewModel } from '../get-document.view-model';
import { GetAddressViewModel } from '../get-address.view-model';
import { DepartmentResumeViewModel } from '../department';
import { GroupResumeViewModel } from '../group';
import { GetContactViewModel } from '../get-contact.view-model';

export class CollaboratorViewModel {
  static toHttp(collaborator: Collaborator) {
    return {
      id: collaborator.id,
      name: collaborator.name,
      age: collaborator.age,
      contact: GetContactViewModel.toHttp(collaborator.contact),
      document: GetDocumentViewModel.toHttp(collaborator.document),
      department: DepartmentResumeViewModel.toHttp(collaborator.department),
      group: GroupResumeViewModel.toHttp(collaborator.group),
      address: GetAddressViewModel.toHttp(collaborator.address),
      login: collaborator.login,
      password: collaborator.password,
      description: collaborator.description,
      active: collaborator.active,
      created_at: collaborator.createdAt,
      updated_at: collaborator.updatedAt,
    };
  }
}
