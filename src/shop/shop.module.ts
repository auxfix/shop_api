
import { Module } from '@nestjs/common';
import { CartService } from './services/cart/cart.service';
import { OrderService } from './services/order/order.service';
import { ProductService } from './services/product/product.service';
import { AdminController } from './controllers/admin/admin.controller';
import { UserController } from './controllers/user/user.controller';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import { User } from '../enteties/users.entity';
import { Product } from '../enteties/products.entity';
import { Order } from '../enteties/orders.entity';
import { OrderItem } from '../enteties/order-items.entity';
import { CartItem } from '../enteties/cart-items.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    UsersModule,
    AuthModule,
    TypeOrmModule.forFeature([User, Product, Order, OrderItem, CartItem])
  ],
  providers: [CartService, OrderService, ProductService],
  controllers: [AdminController, UserController],
  exports: [CartService, OrderService, ProductService],
})
export class ShopModule {}
