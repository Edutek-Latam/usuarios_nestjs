import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/loginDto';
import { UserService } from 'src/user/user.service';
import { threadId } from 'worker_threads';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwtPayload.interaces';
import { compare } from 'src/helpers/auth/hasing';

@Injectable()
export class AuthService {

    constructor(private _userService: UserService, private readonly jwtService:JwtService){}
    async login(loginDto:LoginDto){
        const {email, password} = loginDto;
        const user = await this._userService.findByEmail(email);
        
        if(!user) throw new BadRequestException('Error en autenticacion')

        const valid= compare(password,user.password);
        
        if(!valid) throw new UnauthorizedException()


        const token = this.getJwtToken({email:user.email});
        const { firstname, lastname,code } = user;
        return {code,firstname,lastname, email, token};
    }


    private getJwtToken(payload:JwtPayload ){
        const token = this.jwtService.sign(payload);
        return token
    }
}
