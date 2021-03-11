import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutorisationService } from './autorisation.service';
import { AutorisationController } from './autorisation.controller';
import { AutorisationEntity} from './autorisation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AutorisationEntity])],
  providers: [AutorisationService],
  controllers: [AutorisationController],
  exports :[AutorisationService]
})
export class AutorisationModule {

}
