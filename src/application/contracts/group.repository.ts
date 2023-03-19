import { Group } from 'src/domain/entities/group.entity';
import { Repository } from './repository';

export abstract class IGroupRepository extends Repository<Group> {}
