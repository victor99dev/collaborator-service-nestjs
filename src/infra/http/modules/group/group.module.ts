import { TOKENS } from 'src/infra/container';
import { Module } from '@nestjs/common';
import { GroupController } from './group.controller';
import { IMemoryGroupRepository } from 'src/infra/repositories/in-memory';
import { GroupService } from './group.service';
import {
  CreateGroupUseCase,
  DeleteGroupUseCase,
  GetGroupByCodeUseCase,
  ListGroupUseCase,
  UpdateGroupUseCase,
} from 'src/application/usecases/group';
import { IPrismaGroupRepository } from 'src/infra/repositories/prisma';
import { connection } from 'src/infra/database';

@Module({
  controllers: [GroupController],
  providers: [
    // {
    //   provide: TOKENS.repositories.GROUP,
    //   useFactory: () => new IMemoryGroupRepository(),
    // },
    {
      provide: TOKENS.repositories.GROUP,
      useFactory: () => new IPrismaGroupRepository(connection),
    },
    GroupService,
    CreateGroupUseCase,
    ListGroupUseCase,
    GetGroupByCodeUseCase,
    UpdateGroupUseCase,
    DeleteGroupUseCase,
  ],
})
export class GroupModule {}
