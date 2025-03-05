import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UrlilService } from './urlil.service';
import { CreateUrlilDto } from './dto/create-urlil.dto';

@Controller('url')
export class UrlilController {
  constructor(private readonly urlilService: UrlilService) {}

  @Post('generate')
  create(@Body() createUrlilDto: CreateUrlilDto) {
    return this.urlilService.create(createUrlilDto);
  }
  
  @Get('get/:shorturl')
  findOne(@Param('shorturl') shorturl: string) {
    return this.urlilService.findOne(shorturl);
  }
  
  @Get('getall')
  findAll() {
    return this.urlilService.findAll();
  }
}
