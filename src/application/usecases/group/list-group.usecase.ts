import { Inject } from '@nestjs/common';
import { IGroupRepository } from 'src/application/contracts/repository';
import { Group } from 'src/domain/entities';
import { TOKENS } from 'src/infra/container';

export class ListGroupUseCase {
  constructor(
    @Inject(TOKENS.repositories.GROUP)
    private readonly _groupRepository: IGroupRepository,
  ) {}

  async execute() {
    const group = await this._groupRepository.getAll();

    const total = await this._groupRepository.count();

    return {
      data: group,
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
  data: Group[];
};
