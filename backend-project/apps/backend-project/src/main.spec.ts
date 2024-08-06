import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

jest.mock('@nestjs/core', () => ({
  NestFactory: {
    create: jest.fn().mockResolvedValue({
      listen: jest.fn().mockResolvedValue(undefined),
    }),
  },
}));

describe('Bootstrap', () => {
  it('should create and listen', async () => {
    const mockApp = {
      listen: jest.fn().mockResolvedValue(undefined),
    };
    (NestFactory.create as jest.Mock).mockResolvedValue(mockApp);

    // Importing the main file to trigger the bootstrap function
    await import('./main');

    expect(NestFactory.create).toHaveBeenCalledWith(AppModule);
    expect(mockApp.listen).toHaveBeenCalledWith(3000);
  });
});
