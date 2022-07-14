import { Module } from '@nestjs/common';
import { OrderService } from './service/order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from 'src/typeorm/order.entity';
import { ProductEntity } from 'src/typeorm/product.entity';
import { CartService } from 'src/cart/service/cart.service';
import { CartEntity } from 'src/typeorm/cart.entity';
import { Users } from 'src/typeorm/user.entity';
import { ProductsService } from 'src/product/service/product.service';
import { OrderController } from './controller/order.controller';
@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, ProductEntity, CartEntity, Users])],
  providers: [OrderService, CartService, ProductsService],
  controllers: [OrderController]
})
export class OrderModule { }
