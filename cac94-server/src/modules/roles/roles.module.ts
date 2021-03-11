import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleEntity } from './roles.entity';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';

@Module({
  imports:[TypeOrmModule.forFeature([RoleEntity])],
  providers: [RolesService],
  controllers: [RolesController]
})
export class RolesModule {}
