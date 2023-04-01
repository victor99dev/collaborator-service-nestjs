import { Collaborator } from 'src/domain/entities';
import { Repository } from './repository';

export abstract class ICollaboratorRepository extends Repository<Collaborator> {}
