import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Req,
  Delete,
  Put,Session,Res,
  UseInterceptors,
  UploadedFile
} from '@nestjs/common';
import {UsersService} from "./users.service";
import {EmailConfigService} from "./../emailconfig/emailconfig.service";
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { BaseController } from "./../../com/base.controller";
import {UsersEntity} from "./../users/users.entity";

@Controller('user')
export class UsersController extends BaseController{

  constructor(private readonly userService: UsersService, private readonly emailConfigService: EmailConfigService) {
    super(userService);
  }

/**
** @Method getUser()
** @Return user
**/
  @Post('login')
  async authentificate(@Body() body:UsersEntity,@Req() req,@Session() session){
    return await this.userService.findByLogin(body,session);
  }

  /**
  ** @Method getForgotLogin()
  ** Return l'utilisateur en fonction du nom et login de l'utilisateur.
  ** @Return
  **/
  @Post('get-user-by-login')
  async getUserByLogin(@Body() body:any){
    return await this.userService.getUserByLogin(body);
   }

  @Post('new')
   async newCreate(@Body() body:any){
     return await this.userService.newCreate(body);
   }

  @Get('get-user-role')
  async getUserAndRole(){
    return await this.userService.findUserAndRole();
  }

  @Post('update-user')
  async updateUser(@Body() body:any){
    console.log(body);
    return await this.userService.updateUser(body);
  }

  @Post('update-password')
  async updatePassword(@Body() body:any){
    return await this.userService.updatePassword(body);
  }

}
