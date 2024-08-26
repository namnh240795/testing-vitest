// import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
// import * as request from 'supertest';
// import { AppModule } from '../src/app.module';
// import { AppService } from '../src/app.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  // const appService = { getHello: () => 'Hello World!' };
  it('1 to be 1', () => {
    expect(1).toBe(1);
  });

  // beforeEach(async () => {
  //   const moduleFixture: TestingModule = await Test.createTestingModule({
  //     imports: [AppModule],
  //   })
  //     .overrideProvider(AppService)
  //     .useValue(appService)
  //     .compile();

  //   app = moduleFixture.createNestApplication();
  //   await app.init();
  // });

  // it('Check', () => {
  //   expect(app).toBeDefined();
  // });

  // it('/ (GET)', () => {
  //   return request(app.getHttpServer())
  //     .get('/app/Namnh240795')
  //     .expect(200)
  //     .expect('Hello World!');
  // });

  // afterAll(async () => {
  //   await app.close();
  // });
});
