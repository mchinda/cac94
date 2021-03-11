import { IsEmail, IsString } from 'class-validator';
import { Entity, Column, OneToOne, OneToMany, ManyToOne,JoinColumn,BeforeInsert, BeforeUpdate  } from 'typeorm';

export class UserModel {

  @IsString()
  nom: string;

  @IsString()
  prenom: string;

  @IsString()
  departement: string;

  @IsString()
  telephone: string;

  @IsEmail()
  login: string;

  @IsString()
  password: string;

  @IsString()
  isActive: string;

  @IsString()
  etat:string;
}
