import { Departments } from 'src/domain/entities';
import { Repository } from './repository';

export abstract class IDepartmentRepository extends Repository<Departments> {}
