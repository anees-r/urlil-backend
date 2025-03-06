import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUrlilDto } from './dto/create-urlil.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Urlil } from './entities/urlil.entity';
import * as validator from 'validator';
import { nanoid } from 'nanoid';


@Injectable()
export class UrlilService {
  constructor(@InjectRepository(Urlil) private urlilRepo: Repository<Urlil>){}

  async create(createUrlilDto: CreateUrlilDto) {
    const url = await this.urlilRepo.create(createUrlilDto);

    if(!url.shorturl){
      url.shorturl = nanoid(4);
    }
    if (!validator.isURL(url.url)) {
      return {
        "http_status": "BAD REQUEST",
        "http_code": "400",
        "message": "Invalid URL format!",
        "data": "",
      }
    }
      return {
        "http_status": "SUCCESS",
        "http_code": "200",
        "message": "URL generated!",
        "data": await this.urlilRepo.save(url),
    }
  }

  async findOne(shorturl: string) {
    const url = await this.urlilRepo.findOneBy({shorturl})
     if(url){
      return {
        "http_status": "SUCCESS",
        "http_code": "200",
        "message": "URL found!",
        "data": url,
      }
     }else{
      return {
        "http_status": "FAILURE",
        "http_code": "404",
        "message": "URL not found!",
        "data": '',
      }
     }
  }

  async findAll() {
    const urls = await this.urlilRepo.find();
    if(urls){
      return {
        "http_status": "SUCCESS",
        "http_code": "200",
        "message": "URL(s) found!",
        "data": urls,
      }
    }else{
      return {
        "http_status": "FAILURE",
        "http_code": "404",
        "message": "URL(s) not found!",
        "data": '',
      }
    }
  }

}
