import { Injectable } from '@nestjs/common';
import {
  CreateGroupUseCase,
  DeleteGroupUsecase,
  GetGroupByCodeInput,
  GetGroupByCodeOutput,
  GetGroupByCodeUseCase,
  ListGroupOutput,
  ListGroupUseCase,
  UpdateGroupUsecase,
} from 'src/application/usecases/group';

@Injectable()
export class GroupService {
  constructor(
    private _createGroupUseCase: CreateGroupUseCase,
    private _lisGroupUseCase: ListGroupUseCase,
    private _getByCodeGroupUseCase: GetGroupByCodeUseCase,
    private _updateGroupUseCase: UpdateGroupUsecase,
    private _deleteGroupUseCase: DeleteGroupUsecase,
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

  async update(code, input: any): Promise<void> {
    return this._updateGroupUseCase.execute(code, input);
  }

  async remove(code): Promise<void> {
    return this._deleteGroupUseCase.execute(code);
  }
}
