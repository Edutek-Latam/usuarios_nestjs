import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports:[
    UserModule,
    JwtModule.register({
      global: true,
      secret:'N25Lp4PffPmVtXbt2osPfMTv2xplFO',
      signOptions:{
        expiresIn:'24h'
      }
    })
  ]
})
export class AuthModule {}
