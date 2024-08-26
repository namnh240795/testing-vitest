import { Test, TestingModule } from '@nestjs/testing';
import { MongoPrismaService } from './mongo-prisma.service';
import { PrismaClient } from '@prisma/client';

jest.mock('@prisma/client', () => {
  const actualPrismaClient = jest.requireActual('@prisma/client');
  return {
    ...actualPrismaClient,
    PrismaClient: jest.fn().mockImplementation(() => {
      const instance = new actualPrismaClient.PrismaClient();
      instance.$connect = jest.fn();
      return instance;
    }),
  };
});

describe('MongoPrismaService', () => {
  let service: MongoPrismaService;
  let prismaClientMock: jest.Mocked<PrismaClient>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MongoPrismaService],
    }).compile();

    service = module.get<MongoPrismaService>(MongoPrismaService);
    prismaClientMock = new PrismaClient() as jest.Mocked<PrismaClient>;
    service.prisma = prismaClientMock;
  });

  it('should call $connect on onModuleInit', async () => {
    await service.onModuleInit();
    expect(prismaClientMock.$connect).toHaveBeenCalled();
  });
});
