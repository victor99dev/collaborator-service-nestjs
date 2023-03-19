import { Inject, Injectable } from '@nestjs/common';
import { group } from 'console';
import { IGroupRepository } from 'src/application/contracts/repository';
import { Group } from 'src/domain/entities';
import { TOKENS } from 'src/infra/container';
import { GetGroupIdViewModel } from 'src/infra/http/view-models/group';

@Injectable()
export class GetGroupByCodeUseCase {
  constructor(
    @Inject(TOKENS.repositories.GROUP)
    private readonly _grdRepository: IGroupRepository,
  ) {}

  async execute({ code }: GetGroupByCodeInput): Promise<GetGroupByCodeOutput> {
    const group = await this._grdRepository.findByCode(code);

    return { data: GetGroupIdViewModel.toHttp(group) };
  }
}

export type GetGroupByCodeInput = {
  code: string;
};

export type GetGroupByCodeOutput = {
  data: GetGroupIdViewModel;
};
