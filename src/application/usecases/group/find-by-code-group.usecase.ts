import { Inject, Injectable } from '@nestjs/common';
import { IGroupRepository } from 'src/application/contracts/repository';
import { Group } from 'src/domain/entities';
import { TOKENS } from 'src/infra/container';

@Injectable()
export class GetGroupByCodeUseCase {
  constructor(
    @Inject(TOKENS.repositories.GROUP)
    private readonly _grdRepository: IGroupRepository,
  ) {}

  async execute({ code }: GetGroupByCodeInput): Promise<GetGroupByCodeOutput> {
    const data = await this._grdRepository.findByCode(code);

    return { data: data };
  }
}

export type GetGroupByCodeInput = {
  code: string;
};

export type GetGroupByCodeOutput = {
  data: Group;
};
