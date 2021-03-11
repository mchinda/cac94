import { CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm";

export abstract class BaseEntity {

  @PrimaryGeneratedColumn()
  id:number;

  @CreateDateColumn({type: 'timestamp'})
  created:Date;

  @UpdateDateColumn({type: 'timestamp', nullable: true})
  updated:Date;
}
