import { Module } from '@nestjs/common';
import { MongoPrismaService } from './mongo-prisma.service';

@Module({
  providers: [MongoPrismaService],
  exports: [MongoPrismaService],
})
export class MongoPrismaModule {}
