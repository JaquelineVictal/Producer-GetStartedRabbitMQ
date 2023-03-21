import { Items } from '../dto/create-order.dto';

export class OrderEntity {
  public build(items: Items[]): OrderEntity {
    const orderEntity = new OrderEntity();
    orderEntity.orderId = String(new Date().getTime());
    orderEntity.items = items;
    return orderEntity;
  }
  orderId: string;
  items: Items[];
}
