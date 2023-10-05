import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: any) {
    const payload = { email: user.email, id: user.id };
    return {
      ...user,
      token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (user && await user.comparePassword(password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async register(userData: any): Promise<any> {
    const existingUser = await this.usersRepository.findOne({ where: { email: userData.email } });

    if (existingUser) {
      throw new ConflictException('Cette email existe déjà');
    }

    const user = this.usersRepository.create(userData);
    await this.usersRepository.save(user);
    return user;
  }

  generateJWT(user: User) {
    const payload = { id: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
