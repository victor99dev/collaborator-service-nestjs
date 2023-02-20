import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DepartmentModule } from './modules/departments/department.module';

@Module({
  imports: [DepartmentModule],
  controllers: [AppController],
})
export class AppModule {}
