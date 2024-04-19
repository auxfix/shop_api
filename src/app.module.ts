import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './enteties/users.entity';
import { Product } from './enteties/products.entity';
import { Order } from './enteties/orders.entity';
import { OrderItem } from './enteties/order-items.entity';
import { CartItem } from './enteties/cart-items.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ShopModule } from './shop/shop.module';


@Module({
  imports: [
    AuthModule, 
    UsersModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get("POSTGRES_HOST"),
        port: configService.get("POSTGRES_PORT"),
        username: configService.get("POSTGRES_USER"),
        password: configService.get("POSTGRES_PASSWORD"),
        database: configService.get("POSTGRES_DB"),
        entities: [User, Product, Order, OrderItem, CartItem],
        synchronize: true,
      }),
    }),
    ShopModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

