import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { HelloParamDto } from './dtos/hello.dto';

@ApiTags('app')
@Controller({ path: 'app', version: '1' })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':name')
  @ApiOkResponse({ description: 'Hello World!', type: String })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  async getHello(@Param() helloParamDto: HelloParamDto): Promise<string> {
    return this.appService.getHello(helloParamDto);
  }
}
