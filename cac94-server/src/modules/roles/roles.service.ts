import { Injectable, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, MoreThan, MoreThanOrEqual, LessThan, LessThanOrEqual, Between, IsNull, Equal, In } from "typeorm";
import {BaseService} from "./../../com/base.service";
import {RoleEntity} from "./../roles/roles.entity";

@Injectable()
export class RolesService extends BaseService {

  constructor(@InjectRepository(RoleEntity) private readonly roleRepository:Repository<RoleEntity>){
      super(roleRepository);
        }
}
