import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CartItem } from '../../../enteties/cart-items.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartItem)
    private cartRepository: Repository<CartItem>,
  ) {}

  async addToCart(cartItem: CartItem): Promise<CartItem> {
    return this.cartRepository.save(cartItem);
  }

  async clearBasket(userId: number): Promise<DeleteResult> {
    return this.cartRepository.delete({userId: userId});
  }
}
