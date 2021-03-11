import { Entity, Column, OneToOne, OneToMany, ManyToOne,JoinColumn } from 'typeorm';
import { Transform } from 'class-transformer';
import {BaseEntity} from './../../com/base.entity';
import * as moment from 'moment';
import {UsersEntity} from './../users/users.entity';

@Entity("autorisation")
export class AutorisationEntity extends BaseEntity {

  @Column({length:200, nullable:true,unique: true})
  key:string;

  @ManyToOne(type => UsersEntity, user => user.autorisation)
  @JoinColumn()
  user:UsersEntity[];

}
