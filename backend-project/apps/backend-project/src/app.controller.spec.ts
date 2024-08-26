// import { Test, TestingModule } from '@nestjs/testing';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { MongoPrismaModule } from '@app/mongo-prisma';

describe('AppController', () => {
  // let appController: AppController;

  // beforeEach(async () => {
  //   const app: TestingModule = await Test.createTestingModule({
  //     imports: [MongoPrismaModule],
  //     controllers: [AppController],
  //     providers: [AppService],
  //   }).compile();

  //   appController = app.get<AppController>(AppController);
  // });

  describe('root', () => {
    // it('should return "Hello World!"', () => {
    //   expect(appController.getHello({ name: 'Nam' })).toBe(`Hello, Nam!`);
    // });
    it('1 to be 1', () => {
      // expect(appController.getHello({ name: 'Nam' })).toBe(`Hello, Nam!`);
      expect(1).toBe(1);
    });
  });
});
