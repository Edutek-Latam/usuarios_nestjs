import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable } from 'rxjs';
import { Hmac } from 'src/helpers/auth/hmac';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @InjectRepository(User) 
    private _userRepository: Repository<User> ,
    private jwtService:JwtService){}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest();
    console.log(request.body)
    const hmac = Hmac(request.headers['auth'],request.body)
    return hmac
    /* const token = this.getToken(request);
    console.log('mac',hmac)

    if(!token){
        throw new UnauthorizedException();
    }

    try {
      const payload =  await this.jwtService.verify(
        token,{secret:'N25Lp4PffPmVtXbt2osPfMTv2xplFO'}
      )

      const user =await  this._userRepository.findOneBy({email: payload.email});
        console.log(user.isActivo)

      if(!user.isActivo) {
        throw new UnauthorizedException();
      }
      
    } catch (error) {
      throw new UnauthorizedException();
      //console.log(error)
    }
    return true; */
  }

  private getToken(request: Request){
    const [type,token] = request.headers['authorization']?.split(' ') ?? [];
    return type==='Bearer'? token:undefined
  }
}
