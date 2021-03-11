import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EmailConfigService } from './emailconfig.service';
import { EmailConfigController } from './emailconfig.controller';
import { HandlebarsAdapter, MailerModule,PugAdapter } from '@nest-modules/mailer';
//import {AutorisationService} from './../autorisation/autorisation.service';
//import {AutorisationModule} from './../autorisation/autorisation.module';

@Module({
  imports: [],
  providers: [EmailConfigService],
  controllers: [EmailConfigController],
  exports :[EmailConfigService]
})
export class EmailConfigModule {}
