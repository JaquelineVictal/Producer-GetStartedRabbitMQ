export class CreateOrderDto {
  orderId: string;
  items: Items[];
}

export class Items {
  product: string;
  quantity: number;
}
