import { TOKENS } from 'src/infra/container';
import { Module } from '@nestjs/common';
import { GroupController } from './group.controller';
import { IMemoryGroupRepository } from 'src/infra/repositories/in-memory';
import { GroupService } from './group.service';
import {
  CreateGroupUseCase,
  ListGroupUseCase,
} from 'src/application/usecases/group';

@Module({
  controllers: [GroupController],
  providers: [
    {
      provide: TOKENS.repositories.GROUP,
      useFactory: () => new IMemoryGroupRepository(),
    },
    GroupService,
    CreateGroupUseCase,
    ListGroupUseCase,
  ],
})
export class GroupModule {}
