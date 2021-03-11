// import { Module } from '@nestjs/common';
// import { JwtModule } from '@nestjs/jwt';
// import { PassportModule } from '@nestjs/passport';
// import { AuthController } from './auth.controller';
// import { AuthService } from './auth.service';
// import { JwtStrategy } from './jwt.strategy';
// import {UserModule} from './../user';
// @Module({
//   imports: [
//     PassportModule.register({ defaultStrategy: 'jwt',session: true }),
//     UserModule,
//     JwtModule.register({
//       secret: 'secretKey',
//       signOptions: {
//         expiresIn: 3600,
//       },
//     }),
//   ],
//   controllers: [AuthController],
//   providers: [AuthService,JwtStrategy],
// })
// export class AuthModule {}
