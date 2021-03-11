import { Entity, Column, OneToOne, OneToMany, ManyToOne,JoinColumn } from 'typeorm';
import { Transform } from 'class-transformer';
import {BaseEntity} from './../../com/base.entity';
import * as moment from 'moment';
import {UsersEntity} from './../users/users.entity';

@Entity("roles")
export class RoleEntity extends BaseEntity {

  @Column({length:50,unique:true})
     name: string;

   @OneToMany(type => UsersEntity, user => user.role)
   user:UsersEntity[];
}
