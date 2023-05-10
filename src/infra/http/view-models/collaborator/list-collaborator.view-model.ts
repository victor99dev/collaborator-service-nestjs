import { Collaborator } from 'src/domain/entities';
import { GetAddressViewModel } from '../get-address.view-model';
import { GetDocumentViewModel } from '../get-document.view-model';
import { DepartmentResumeViewModel } from '../department';
import { GroupResumeViewModel } from '../group';
import { GetContactViewModel } from '../get-contact.view-model';

export class ListCollaboratorViewModel {
  static toHttpList(collaborator: Collaborator[]) {
    const _collaborators: unknown[] = [];
    collaborator.forEach((_collaborator) => {
      const viewModel = {
        id: _collaborator.id,
        name: _collaborator.name,
        age: _collaborator.age,
        contact: GetContactViewModel.toHttp(_collaborator.contact),
        document: GetDocumentViewModel.toHttp(_collaborator.document),
        department: DepartmentResumeViewModel.toHttp(_collaborator.department),
        group: GroupResumeViewModel.toHttp(_collaborator.group),
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
