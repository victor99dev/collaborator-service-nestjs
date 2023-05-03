import { Collaborator } from 'src/domain/entities';
import { GetDocumentViewModel } from '../get-document.view-model';
import { GetAddressViewModel } from '../get-address.view-model';
import { DepartmentResumeViewModel } from '../department';
import { GroupResumeViewModel } from '../group';

export class CollaboratorViewModel {
  static toHttp(collaborator: Collaborator) {
    return {
      id: collaborator.id,
      name: collaborator.name,
      email: collaborator.email,
      age: collaborator.age,
      documents: GetDocumentViewModel.toHttp(collaborator.document),
      departments: DepartmentResumeViewModel.toHttp(collaborator.department),
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
