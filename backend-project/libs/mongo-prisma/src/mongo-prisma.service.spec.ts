import { Test, TestingModule } from '@nestjs/testing';
import { MongoPrismaService } from './mongo-prisma.service';
import { PrismaClient } from '@prisma/client';

jest.mock('@prisma/client', () => {
  return {
    PrismaClient: jest.fn().mockImplementation(() => {
      return {
        someModel: {
          findMany: jest.fn(),
        },
        $extends: jest.fn().mockImplementation((extension) => {
          return {
            query: {
              $allOperations: extension.query.$allOperations,
            },
          };
        }),
      };
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
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call getConnection on module init', async () => {
    const getConnectionSpy = jest.spyOn(service, 'getConnection');
    await service.onModuleInit();
    expect(getConnectionSpy).toHaveBeenCalled();
  });
});
