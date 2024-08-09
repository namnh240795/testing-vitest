import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const getUrl: () => Promise<string> = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(
          'mongodb://root:example@localhost:7777/translations?authSource=admin&directConnection=true',
        );
      } else {
        resolve(
          'mongodb://ro1ot:example@localhost:7777/translations?authSource=admin&directConnection=true',
        );
      }
    }, 1000);
  });
};

let globalPrisma: PrismaClient;

const getConnection = async () => {
  const url = await getUrl();

  globalPrisma = new PrismaClient({
    datasourceUrl: url,
  }).$extends({
    query: {
      async $allOperations({ model, operation, args, query }) {
        try {
          const result = await query(args);
          return result;
        } catch (e) {
          // reconnect
          await getConnection();
          // retry query with new connection
          return globalPrisma[model][operation](args);
        }
      },
    },
  }) as PrismaClient;
};

@Injectable()
export class MongoPrismaService implements OnModuleInit {
  prisma: PrismaClient = globalPrisma;

  async onModuleInit() {
    await getConnection();
    this.prisma = globalPrisma;
  }
}
