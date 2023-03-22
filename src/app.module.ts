import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';
import { RabbitMqModule } from './rabbit-mq/rabbit-mq.module';

@Module({
  imports: [RabbitMqModule.forRoot(process.env.HOST)],
  controllers: [OrderController],
  providers: [AppService, OrderService],
})
export class AppModule {}
