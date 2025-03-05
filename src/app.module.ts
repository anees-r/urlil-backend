import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlilModule } from './urlil/urlil.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Urlil } from './urlil/entities/urlil.entity';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot(), // to read .env
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port:  Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Urlil],
      synchronize: true,
    }),UrlilModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
