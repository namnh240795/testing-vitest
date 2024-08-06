import { Injectable } from '@nestjs/common';
import { HelloParamDto } from './dtos/hello.dto';

@Injectable()
export class AppService {
  getHello(helloParamDto: HelloParamDto): string {
    return `Hello, ${helloParamDto.name}!`;
  }
}
