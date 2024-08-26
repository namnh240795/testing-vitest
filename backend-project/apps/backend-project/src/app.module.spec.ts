import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoPrismaModule } from '@app/mongo-prisma';

describe('AppModule', () => {
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
  });

  it('should be defined', () => {
    const appModule = module.get<AppModule>(AppModule);
    expect(appModule).toBeDefined();
  });

  it('should import MongoPrismaModule', () => {
    const mongoPrismaModule = module.get<MongoPrismaModule>(MongoPrismaModule);
    expect(mongoPrismaModule).toBeDefined();
  });

  it('should have AppController', () => {
    const appController = module.get<AppController>(AppController);
    expect(appController).toBeDefined();
  });

  it('should have AppService', () => {
    const appService = module.get<AppService>(AppService);
    expect(appService).toBeDefined();
  });
});
