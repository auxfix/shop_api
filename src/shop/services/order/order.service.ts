import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { OrderItem } from '../../../enteties/order-items.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderItem)
    private orderRepository: Repository<OrderItem>,
  ) {}

  async makeOrder(ordertItem: OrderItem): Promise<OrderItem> {
    return this.orderRepository.save(ordertItem);
  }

  async listOrders(): Promise<OrderItem[]> {
    return this.orderRepository.find();
  }

}
