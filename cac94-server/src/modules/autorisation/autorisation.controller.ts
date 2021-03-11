import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Req,
  Delete,
  Put,
  UseInterceptors,
  UploadedFile
} from '@nestjs/common';
import { BaseController } from "./../../com/base.controller";
import {AutorisationService} from './autorisation.service';

@Controller('autorisation')
export class AutorisationController extends BaseController {

  constructor(private readonly autorisationService: AutorisationService) {
    super(autorisationService);
  }

  @Post('add-auto')
  add(@Body() body:any){
    return this.autorisationService.add(body);
  }

  @Post('find-auto')
  findByKeyAndUser(@Body() body:any){
    return this.autorisationService.findByKeyAndUser(body);
  }

  @Post('delete-auto')
  deleteAutorisation(@Body() body:any){
    return this.autorisationService.deleteAutorisation(body);
  }
}
