import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/loginDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  login(@Body() loginDto: LoginDto ){
    //console.log(loginDto)
    const userValid = this.authService.login(loginDto)
    return userValid;
  }

}