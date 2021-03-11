import { Injectable,BadRequestException, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { JwtService } from '@nestjs/jwt';
import { Repository, UpdateResult, DeleteResult,MoreThan, MoreThanOrEqual, LessThan, LessThanOrEqual, Between, IsNull, Equal, In } from "typeorm";
import {BaseService} from "./../../com/base.service";
import {UsersEntity} from "./../users/users.entity";
import {RoleEntity} from "./../roles/roles.entity";
import {EmailConfigService} from "./../emailconfig/emailconfig.service";
import * as bcrypt from 'bcryptjs';
import { UserModel } from './user.model';

import { Pagination, PaginationOptionsInterface } from './../paginate';

@Injectable()
export class UsersService {
  private saltRounds: number=10;

  constructor( private readonly jwtService: JwtService,
              @InjectRepository(UsersEntity) private readonly userRepository:Repository<UsersEntity>,
              @InjectRepository(RoleEntity) private readonly roleRepository:Repository<RoleEntity>,
              private emailConfigService:EmailConfigService){
        }


async newCreate(body:UsersEntity): Promise<UsersEntity> {
  const entity = Object.assign(new UsersEntity(), body);
  let user = await this.userRepository.findOne({login:body.login});
  if(user){
    throw new BadRequestException('Le login exite déjà.');
  }else{
    const result = await this.userRepository.save(entity);
    delete result.password;
    return result;
  }
}

/**@Method updatePassword()
**Permet de reinitialiser le password
**/
  async updatePassword(body:any){
    body.nouveauPassword = await this.getHash(body.nouveauPassword);
    return await this.userRepository
    .createQueryBuilder()
    .update(UsersEntity)
    .set({password:body.nouveauPassword})
    .where("login =:login", {login:body.login})
    .execute();
  }

async findUserAndRole(){
  
}


async getHash(password: string): Promise<string> {
  return await bcrypt.hash(password, this.saltRounds);
}

async compareHash(password: string, hash: string): Promise<boolean> {
  console.log("Hash => "+hash, password);
  return bcrypt.compare(password, hash);
}

    /**@Method findByLogin()
    ** @Return
    **/
    async findByLogin(body:any,session){
      let user = await this.userRepository.findOne({login:body.login});
      if(!user){
        throw new BadRequestException();
      }
      let gooodPassword = await this.compareHash(body.password, user.password);
        if (!gooodPassword) {throw new BadRequestException('Invalid credentials');}
      let accessToken = this.jwtService.sign(body);
      delete user.password;
      session.user = user;
      session.save((err) => {
        if(err){console.log(err);}else{
          console.log("success saved")
        }
      });
      console.log(session);
      return user;
    }



  /** @Method updateUser()
  ** Permet de mettre à jour l'utilisateur
  ** @Param body, contient: idRole,isActive,etat.
  **/
    async updateUser(body :any){
      let login:any;
      let filters:any = await this.getFilter(body,login);
      let roleFind:any = await this.roleRepository.findOne({name:body.role});
      let data:any = await this.userRepository
          .createQueryBuilder()
          .update(UsersEntity)
          .set({nom:body.nom,prenom:body.prenom, telephone:body.telephone,departement:body.departement,isActive:body.isActive, etat:body.etat, role:roleFind.id})
          .where("login =:login", {login:login})
          .setParameters(filters)
          .execute();
          this.emailConfigService.accountIsValidate(body);
          return data;
    }

    /**@Method getFilter()
    **assign paramettres
    **/
    async getFilter(body,login){
      let filters:any = {
        login:body.login
      }
    return filters;
    }

    /**@Method getForgotLogin()
    ** Recupétation de l'utilisateur en fonction du nom et de son login
    **/
    async getUserByLogin(body:any){
      return await this.userRepository.findOne({nom:body.nom,login:body.login});
    }
}
