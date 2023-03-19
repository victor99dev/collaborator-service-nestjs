import { Inject, Injectable } from '@nestjs/common';
import { IGroupRepository } from 'src/application/contracts/repository';
import { TOKENS } from 'src/infra/container';

@Injectable()
export class DeleteGroupUsecase {
  constructor(
    @Inject(TOKENS.repositories.GROUP)
    private readonly _groupRepository: IGroupRepository,
  ) {}

  async execute(code: string): Promise<void> {
    const codeReturn = await this._groupRepository.findByCode(code);

    if (!codeReturn) throw new Error(`Not Found Group with code ${code}`);

    return await this._groupRepository.delete(code);
  }
}
