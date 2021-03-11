import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Constant } from './constant';

@Module({
      imports:[TypeOrmModule.forFeature([Constant])],
      providers: [Constant],
      exports :[Constant],
})

export class ConstantModule {


}
