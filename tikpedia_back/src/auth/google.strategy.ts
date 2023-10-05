// google.strategy.ts
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,  // Utilisez des variables d'environnement pour sécuriser vos identifiants
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/google/callback',
      scope: ['email', 'profile'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: Function) {
    const { emails } = profile;
    const email = emails[0].value;
    let user = await this.usersRepository.findOne({ where: { email } });

    if (!user) {
      user = this.usersRepository.create({
        email
      });
      await this.usersRepository.save(user);
    }

    done(null, user);
  }
}
