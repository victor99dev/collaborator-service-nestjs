import { Group } from 'src/domain/entities/group.entity';
import { Repository } from './shared';

export abstract class IGroupRepository extends Repository<Group> {}
