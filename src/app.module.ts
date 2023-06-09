import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './config/typeorm.config';

@Module({
  imports: [BoardsModule, TypeOrmModule.forRoot(typeORMConfig)],
})
export class AppModule {}
