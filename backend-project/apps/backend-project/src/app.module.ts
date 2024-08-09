import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoPrismaModule } from '@app/mongo-prisma';

@Module({
  imports: [MongoPrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
