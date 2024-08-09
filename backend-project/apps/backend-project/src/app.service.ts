import { Injectable } from '@nestjs/common';
import { HelloParamDto } from './dtos/hello.dto';
import { MongoPrismaService } from '@app/mongo-prisma';

@Injectable()
export class AppService {
  constructor(private readonly mongoPrismaService: MongoPrismaService) {}
  async getHello(helloParamDto: HelloParamDto): Promise<string> {
    const users = await this.mongoPrismaService.prisma.user.findMany();

    console.log(users);

    return `Hello, ${helloParamDto.name}!`;
  }
}
