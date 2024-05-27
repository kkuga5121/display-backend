import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MediaModule } from './media/media.module';
import { MonitorModule } from './monitor/monitor.module';
import { MonitorModule } from './monitor/monitor.module';

@Module({
  imports: [MediaModule, MonitorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
