import { Module } from '@nestjs/common';
import { OrderService } from './service/order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users, Products, Carts, Orders } from 'src/entities';
import { CartService } from 'src/cart/service/cart.service';
import { ProductsService } from 'src/product/service/product.service';
import { OrderController } from './controller/order.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Orders, Products, Carts, Users])],
  providers: [OrderService, CartService, ProductsService],
  controllers: [OrderController]
})
export class OrderModule { }
