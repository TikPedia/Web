import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { GoogleStrategy } from './google.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '1h' },  
    }),
  ],
  providers: [AuthService, LocalStrategy, GoogleStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
