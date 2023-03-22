import { Collaborators } from 'src/domain/entities';
import { GetDocumentViewModel } from '../get-document.view-model';
import { GetAddressViewModel } from '../get-address.view-model';

export class GetCollaboratorIdViewModel {
  static toHttp(collaborator: Collaborators) {
    return {
      id: collaborator.id,
      name: collaborator.name,
      age: collaborator.age,
      documents: GetDocumentViewModel.toHttp(collaborator.documents),
      departments: collaborator.departmentId,
      group: collaborator.groupId,
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
