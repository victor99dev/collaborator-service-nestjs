import { Inject } from '@nestjs/common';
import { IGroupRepository } from 'src/application/contracts/repository';
import { Group } from 'src/domain/entities';
import { TOKENS } from 'src/infra/container';
import { ListGroupViewModel } from 'src/infra/http/view-models/group';

export class ListGroupUseCase {
  constructor(
    @Inject(TOKENS.repositories.GROUP)
    private readonly _groupRepository: IGroupRepository,
  ) {}

  async execute() {
    const group = await this._groupRepository.getAll();

    const total = await this._groupRepository.count();

    return {
      data: ListGroupViewModel.toHttpList(group),
      metadata: {
        total,
        length: group.length,
      },
    };
  }
}

export type ListGroupOutput = {
  metadata: {
    [key: string]: unknown;
  };
  data: ListGroupViewModel[];
};
