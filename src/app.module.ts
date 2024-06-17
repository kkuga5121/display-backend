import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MediaModule } from './media/media.module';
import { MonitorModule } from './monitor/monitor.module';
import { MulterModule } from '@nestjs/platform-express';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { SequenceModule } from './sequence/sequence.module';

@Module({
  imports: [
    MulterModule.register({
      dest:'./files'
    }),
    MediaModule, MonitorModule, PrismaModule, SequenceModule],
  controllers: [AppController],
  providers: [AppService,PrismaService],
})
export class AppModule {}
