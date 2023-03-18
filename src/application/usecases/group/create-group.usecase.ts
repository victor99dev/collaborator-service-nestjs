import { Inject, Injectable } from '@nestjs/common';
import { IGroupRepository } from 'src/application/contracts/repository';
import { Group } from 'src/domain/entities/group.entity';
import { TOKENS } from 'src/infra/container';

@Injectable()
export class CreateGroupUseCase {
  constructor(
    @Inject(TOKENS.repositories.GROUP)
    private readonly _groupRepository: IGroupRepository,
  ) {}

  async execute(param: GroupInput): Promise<void> {
    const output = new Group({
      name: param.name,
      description: param.description,
      active: true,
    });

    this._groupRepository.save(output);
  }
}

export interface GroupInput {
  name: string;
  description: string;
  active: boolean;
}

export type GroupOutput = {
  output: Group;
};
