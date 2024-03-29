import { Inject, Injectable } from '@nestjs/common';
import { IGroupRepository } from 'src/application/contracts';
import { TOKENS } from 'src/infra/container';
import { GroupViewModel } from 'src/infra/http/view-models/group';

@Injectable()
export class GetGroupByCodeUseCase {
  constructor(
    @Inject(TOKENS.repositories.GROUP)
    private readonly _groupRepository: IGroupRepository,
  ) {}

  async execute({ code }: GetGroupByCodeInput): Promise<GetGroupByCodeOutput> {
    const group = await this._groupRepository.findByCode(code);

    if (!group) throw new Error(`Not Found group with code ${code}`);

    return { data: GroupViewModel.toHttp(group) };
  }
}

export type GetGroupByCodeInput = {
  code: string;
};

export type GetGroupByCodeOutput = {
  data: GroupViewModel;
};
