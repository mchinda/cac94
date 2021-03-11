// import { Injectable,BadRequestException } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { JwtPayload } from './interfaces/jwt-payload.interface';
// import {UserService} from "./../user";
//
// @Injectable()
// export class AuthService {
//   constructor(private readonly jwtService: JwtService,private readonly userService:UserService) {}
//
//   async createToken() {
//     const user: JwtPayload = { email: 'test@email.com',password:"password" };
//     const accessToken = this.jwtService.sign(user);
//     return {
//       expiresIn: 3600,
//       accessToken,
//     };
//   }
//
//   async validateUser(payload: JwtPayload,session:any): Promise<any> {
//     const user = await this.userService.findByEmailWithPassword(payload.email);
//     if (!user) {
//       throw new BadRequestException();
//     }
//     let gooodPassword = await this.userService.compareHash(payload.password, user.password)
//     if (!gooodPassword) {
//       throw new BadRequestException('Invalid credentials');
//     }
//     let accessToken = this.jwtService.sign(payload);
//     //session.token = accessToken;
//     delete user.password;
//     session.user = user;
//     session.save((err) => {
//       if(err){
//         console.log(err);
//       }else{
//         console.log("success saved")
//       }
//
//     });
//     return {user: user,token : accessToken};
//   }
// }
