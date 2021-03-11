import { Injectable, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, MoreThan, MoreThanOrEqual, LessThan, LessThanOrEqual, Between, IsNull, Equal, In } from "typeorm";
import {BaseService} from "./../../com/base.service";
import { AutorisationEntity } from "./autorisation.entity";

@Injectable()
export class AutorisationService extends BaseService {

  constructor(@InjectRepository(AutorisationEntity) private readonly autorisationRepository:Repository<AutorisationEntity>){
      super(autorisationRepository);
    }

  /**
  **@Method add()
  ** Ajout d'une autorisation
  ** @Params body, contient l'utilisateur et la clé unique.
  **/
  async add(body:any){
      let objAuto = Object.assign({},{user:body.idUser,key:body.uniq_key});
      return await this.autorisationRepository.save(objAuto);
    }

/**
**@Method findByKeyAndUser()
**Permet de vérifier si l'autrisation existe.
** @Params body, contient l'utilisateur et la clé unique.
**/
  async findByKeyAndUser(body:any){
    return await this.autorisationRepository.findOne({key:body.key,user:body.id});
  }


/**
**@Method delete()
**@Params body, contient la clé et l'utilisateur
**Permet de supprimer, l'autorisation.
**/
  async deleteAutorisation(body:any){
  await this.autorisationRepository
              .createQueryBuilder()
              .delete()
              .from(AutorisationEntity)
              .where("key = :key", { key: body.key})
              .andWhere("user = :user", { user: body.id })
              .execute();
    }

}
