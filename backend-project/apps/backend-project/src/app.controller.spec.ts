import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoPrismaModule } from '@app/mongo-prisma';
import { HelloParamDto } from './dtos/hello.dto';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [MongoPrismaModule],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('root', () => {
    it('should return "Hello, Nam!"', () => {
      const helloParamDto: HelloParamDto = { name: 'Nam' };
      jest
        .spyOn(appService, 'getHello')
        .mockResolvedValue(Promise.resolve('Hello, Nam!'));
      expect(appController.getHello(helloParamDto)).resolves.toBe(
        'Hello, Nam!',
      );
    });

    it('should return "Hello, John!"', () => {
      const helloParamDto: HelloParamDto = { name: 'John' };
      jest
        .spyOn(appService, 'getHello')
        .mockResolvedValue(Promise.resolve('Hello, John!'));
      expect(appController.getHello(helloParamDto)).resolves.toBe(
        'Hello, John!',
      );
    });

    it('should handle empty name', () => {
      const helloParamDto: HelloParamDto = { name: '' };
      jest
        .spyOn(appService, 'getHello')
        .mockResolvedValue(Promise.resolve('Hello, !'));
      expect(appController.getHello(helloParamDto)).resolves.toBe('Hello, !');
    });

    it('should handle null name', () => {
      const helloParamDto: HelloParamDto = { name: null };
      jest
        .spyOn(appService, 'getHello')
        .mockResolvedValue(Promise.resolve('Hello, null!'));
      expect(appController.getHello(helloParamDto)).resolves.toBe(
        'Hello, null!',
      );
    });

    it('should call AppService.getHello', () => {
      const helloParamDto: HelloParamDto = { name: 'Test' };
      const getHelloSpy = jest
        .spyOn(appService, 'getHello')
        .mockResolvedValue(Promise.resolve('Hello, Test!'));
      expect(appController.getHello(helloParamDto)).resolves.toBe(
        'Hello, Test!',
      );
      expect(getHelloSpy).toHaveBeenCalledWith(helloParamDto);
    });
  });
});
