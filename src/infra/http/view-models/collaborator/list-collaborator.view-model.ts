import { Collaborator } from 'src/domain/entities';
import { GetAddressViewModel } from '../get-address.view-model';
import { GetDocumentViewModel } from '../get-document.view-model';

export class ListCollaboratorViewModel {
  static toHttpList(collaborator: Collaborator[]) {
    const _collaborators: unknown[] = [];
    collaborator.forEach((_collaborator) => {
      const viewModel = {
        id: _collaborator.id,
        name: _collaborator.name,
        email: _collaborator.email,
        age: _collaborator.age,
        documents: GetDocumentViewModel.toHttp(_collaborator.documents),
        departments: _collaborator.departmentId,
        group: _collaborator.groupId,
        address: GetAddressViewModel.toHttp(_collaborator.address),
        login: _collaborator.login,
        password: _collaborator.password,
        description: _collaborator.description,
        active: _collaborator.active,
        created_at: _collaborator.createdAt,
        updated_at: _collaborator.updatedAt,
      };
      _collaborators.push(viewModel);
    });
    return _collaborators;
  }
}
