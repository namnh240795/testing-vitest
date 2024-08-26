import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class MongoPrismaService implements OnModuleInit {
  prisma: PrismaClient;

  async onModuleInit() {
    await this.getConnection();
  }

  getConnection = async () => {
    const url = (await this.getUrl()) as string;

    this.prisma = new PrismaClient({
      datasourceUrl: url,
    }).$extends({
      query: {
        async $allOperations({ model, operation, args, query }) {
          try {
            const result = await query(args);
            return result;
          } catch (e) {
            // reconnect
            await this.getConnection();
            // retry query with new connection
            return this.prisma[model][operation](args);
          }
        },
      },
    }) as PrismaClient;
  };

  getUrl() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          'mongodb://root:example@localhost:7777/translations?authSource=admin&directConnection=true',
        );
      }, 1000);
    });
  }
}
