import {BaseEntity} from "./base.entity";
import { Pagination, PaginationOptionsInterface } from './../modules/paginate';
import { Repository, DeepPartial,UpdateResult, DeleteResult } from 'typeorm';

export class BaseService{
  public repository:Repository<any>;

    constructor(_repository:Repository<any>){
      this.repository  = _repository;
    }

  async paginate(options: PaginationOptionsInterface): Promise<Pagination<BaseEntity>> {
    const [results, total] = await this.repository.findAndCount({
      // where : options.where || {},
      take: options.limit,
      skip: options.page, // think this needs to be page * limit
    });
    return new Pagination<BaseEntity>({
      results,
      total,
    });
  }

    async all():Promise<BaseEntity[] | []>{
      return this.repository.find({
        order:{
          created:'ASC'
        },
        skip:0,
        take:10
      });
    }

    async create(entity: any): Promise<DeepPartial<any>> {
      console.log("create posteUser baseservice :");
      console.log(entity);
      return await this.repository.save(entity);
    }

    async update(_id:number ,entity:any): Promise<UpdateResult> {
      delete entity.id;
      return await this.repository.update(_id,entity);
    }

    async findById(_id:number): Promise<BaseEntity | null> {
      return await this.repository.findOne(_id);
    }

    async destroy(_id:number): Promise<DeleteResult> {
      return await this.repository.delete(_id);
    }

}
