import { Entity, Column, OneToOne, OneToMany, ManyToOne,JoinColumn,BeforeInsert, BeforeUpdate  } from 'typeorm';
import { Transform } from 'class-transformer';
import {BaseEntity} from './../../com/base.entity';
import {RoleEntity} from './../roles/roles.entity';
import {AutorisationEntity} from './../autorisation/autorisation.entity';
import * as moment from 'moment';
import * as bcrypt from 'bcrypt';

@Entity("users", {schema:process.env.TYPEORM_DATABASE})
export class UsersEntity extends BaseEntity{

    @Column()
    nom: string;

    @Column()
    prenom: string;

    @Column({default:null})
    departement: string;

    @Column()
    telephone: string;

    @Column({default:null,unique: true ,name: 'email',length: 100})
    login: string;

    @Column({select:true})
    password: string;

    @BeforeInsert()
    @BeforeUpdate()
     async hashPassword() {
        this.password = await bcrypt.hash(this.password, Number(process.env.HASH_SALT));
     }

    @Column()
    isActive: string;

    //@Column({default: 'Non valider'})
    @Column()
    etat:string;

    @ManyToOne(role => RoleEntity, role => role.user)
    @JoinColumn()
    role:RoleEntity;
    
    @OneToMany(type => AutorisationEntity, autorisation => autorisation.user)
    autorisation:AutorisationEntity[];

  }
