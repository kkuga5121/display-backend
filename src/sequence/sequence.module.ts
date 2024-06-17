import { Module } from '@nestjs/common';
import { SequenceService } from './sequence.service';
import { SequenceController } from './sequence.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [SequenceController],
  providers: [SequenceService,PrismaService],
})
export class SequenceModule {}
