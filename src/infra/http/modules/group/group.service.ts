import { Injectable } from '@nestjs/common';
import {
  CreateGroupUseCase,
  GetGroupByCodeInput,
  GetGroupByCodeOutput,
  GetGroupByCodeUseCase,
  ListGroupOutput,
  ListGroupUseCase,
} from 'src/application/usecases/group';

@Injectable()
export class GroupService {
  constructor(
    private _createGroupUseCase: CreateGroupUseCase,
    private _lisGroupUseCase: ListGroupUseCase,
    private _getByCodeGroupUseCase: GetGroupByCodeUseCase,
  ) {}

  async createGroup(input: any): Promise<void> {
    return this._createGroupUseCase.execute(input);
  }

  async getAll(): Promise<ListGroupOutput> {
    return this._lisGroupUseCase.execute();
  }

  async findByCode(input: GetGroupByCodeInput): Promise<GetGroupByCodeOutput> {
    return this._getByCodeGroupUseCase.execute(input);
  }
}
