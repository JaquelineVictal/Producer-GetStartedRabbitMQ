import { Controller, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderEntity } from './entities/order.entity';
import { Items } from './dto/create-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() items: Items[]) {
    const newOrder = new OrderEntity().build(items);
    return this.orderService.create(newOrder);
  }
}
