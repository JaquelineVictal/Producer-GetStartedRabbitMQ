import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PublisherModule } from './publisher/publisher.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [PublisherModule, OrderModule],
  providers: [AppService],
})
export class AppModule {}
