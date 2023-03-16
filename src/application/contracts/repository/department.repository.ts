import { Departments } from 'src/domain/entities';
import { Repository } from './shared';

export abstract class IDepartmentRepository extends Repository<Departments> {}
