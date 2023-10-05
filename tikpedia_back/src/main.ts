import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as passport from 'passport';
import { config } from 'dotenv';

config();
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(
    session({
      secret: 'your-secret-key',
      resave: false,
      saveUninitialized: false,
    })
  );

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setViewEngine('hbs');
  app.use(passport.initialize());

  await app.listen(3000);
}

bootstrap();
