import { Controller, Request, Post, Get, UseGuards, Body, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('register')
  async register(@Body() userData) {
    return this.authService.register(userData);
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  googleLogin() {
    // Cette route est utilisée pour démarrer le processus de connexion avec Google
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleLoginCallback(@Req() req) {
    return this.authService.generateJWT(req.user); 
  }
}
