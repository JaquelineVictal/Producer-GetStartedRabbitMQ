import { Injectable } from '@nestjs/common';
import { OrderEntity } from './entities/order.entity';

@Injectable()
export class OrderService {
  create(newOrder: OrderEntity) {
    console.log(newOrder);
  }
}
