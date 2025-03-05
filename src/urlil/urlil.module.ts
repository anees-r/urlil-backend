import { Module } from '@nestjs/common';
import { UrlilService } from './urlil.service';
import { UrlilController } from './urlil.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Urlil } from './entities/urlil.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Urlil])],
  controllers: [UrlilController],
  providers: [UrlilService],
})
export class UrlilModule {}
