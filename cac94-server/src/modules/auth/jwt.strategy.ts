// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { ExtractJwt, Strategy } from 'passport-jwt';
// import { AuthService } from './auth.service';
// import { JwtPayload } from './interfaces/jwt-payload.interface';
//
// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor(private readonly authService: AuthService) {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       secretOrKey: 'secretKey',
//     });
//   }
//
//   async validate(payload: JwtPayload,session:any) {
//     const user = await this.authService.validateUser(payload,session);
//     if (!user) {
//       throw new UnauthorizedException();
//     }
//     return user;
//   }
// }
