import { Injectable } from '@nestjs/common';
import { PublishConfig } from 'src/publisher/entities/publisher.entity';
import { PublisherService } from 'src/publisher/publisher.service';
import { QueueEnum } from 'src/queue.enum';
import { OrderEntity } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(private readonly publisherService: PublisherService) {}
  async create(newOrder: OrderEntity) {
    const publishConfig: PublishConfig = {
      data: newOrder,
      queueName: QueueEnum.ORDER,
    };
    await this.publisherService.publish(publishConfig);
  }
}
