import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './google.strategy';
import { UserModule } from '../user/user.module';

@Module({
    imports: [UserModule],
    controllers: [AuthController],
    providers: [GoogleStrategy],
  })
  export class AuthModule {}