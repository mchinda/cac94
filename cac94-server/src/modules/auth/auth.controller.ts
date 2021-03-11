// import { Controller, Get, Body,Req, UseGuards,Post,ValidationPipe,Session } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
// import { AuthService } from './auth.service';
// import {AuthModel} from "./auth.model";
//
// @Controller('auth')
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}
//
//   @Get('token')
//   async createToken(): Promise<any> {
//     return await this.authService.createToken();
//   }
//
//   @Post('login')
//   authentificate(@Body() authMdl:AuthModel,@Req() req,@Session() session):Promise<any>{
//     return this.authService.validateUser(authMdl,session);
//   }
//
//   @Get('data')
//   findAll(@Req() req) {
//     console.log(req.session);
//     // this route is restricted by AuthGuard
//     // JWT strategy
//   }
// }
