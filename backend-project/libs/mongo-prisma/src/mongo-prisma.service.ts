import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class MongoPrismaService implements OnModuleInit {
  prisma: PrismaClient;

  async onModuleInit() {
    await this.prisma.$connect();
  }
}
