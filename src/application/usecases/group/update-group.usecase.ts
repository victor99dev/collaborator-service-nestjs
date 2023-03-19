import { Inject, Injectable } from '@nestjs/common';
import { IGroupRepository } from 'src/application/contracts/repository';
import { Group } from 'src/domain/entities';
import { TOKENS } from 'src/infra/container';

@Injectable()
export class UpdateGroupUsecase {
  constructor(
    @Inject(TOKENS.repositories.GROUP)
    private readonly _groupRepository: IGroupRepository,
  ) {}

  async execute(code: string, data: Group) {
    const codeReturn = await this._groupRepository.findByCode(code);

    if (!codeReturn) throw new Error(`Not Found group with code ${code}`);

    data.name;
    data.description;
    data.active;
    data.updatedAt = new Date();

    return await this._groupRepository.update(code, data);
  }
}
