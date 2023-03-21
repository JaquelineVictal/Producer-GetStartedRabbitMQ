import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PublisherService } from './publisher.service';
import { PublisherModule } from './publisher/publisher.module';

@Module({
  imports: [PublisherModule],
  controllers: [AppController],
  providers: [PublisherService],
})
export class AppModule {}
