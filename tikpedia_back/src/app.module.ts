import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'vaf',
      password: 'vaf',
      database: 'tikpedia',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], 
      synchronize: true,
    }),
    PassportModule.register({ defaultStrategy: 'local' }),
    AuthModule,
  ],
})
export class AppModule {}
