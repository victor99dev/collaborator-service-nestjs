import { GroupModule } from './modules/group/group.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DepartmentModule } from './modules/departments/department.module';
import { CollaboratorModule } from './modules/collaborator/collaborator.module';

@Module({
  imports: [CollaboratorModule, DepartmentModule, GroupModule],
  controllers: [AppController],
})
export class AppModule {}
