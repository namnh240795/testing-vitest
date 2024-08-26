import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { MongoPrismaService } from '@app/mongo-prisma';
import { HelloParamDto } from './dtos/hello.dto';

describe('AppService', () => {
  let appService: AppService;
  let mongoPrismaService: MongoPrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppService,
        {
          provide: MongoPrismaService,
          useValue: {
            prisma: {
              user: {
                findMany: jest.fn(),
              },
            },
          },
        },
      ],
    }).compile();

    appService = module.get<AppService>(AppService);
    mongoPrismaService = module.get<MongoPrismaService>(MongoPrismaService);
  });

  it('should return a greeting message with the user name', async () => {
    const helloParamDto: HelloParamDto = { name: 'John' };
    const mockUsers = [
      { id: '1', email: 'john.doe@example.com', name: 'John Doe' },
    ];
    jest
      .spyOn(mongoPrismaService.prisma.user, 'findMany')
      .mockResolvedValue(mockUsers);

    const result = await appService.getHello(helloParamDto);

    expect(result).toBe('Hello, John!');
    expect(mongoPrismaService.prisma.user.findMany).toHaveBeenCalled();
  });
});
