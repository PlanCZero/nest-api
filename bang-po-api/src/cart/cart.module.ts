import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartService } from './service/cart.service';
import { CartEntity } from 'src/typeorm/cart.entity';
import { ProductsService } from 'src/product/service/product.service';
import { ProductEntity } from 'src/typeorm/product.entity';
import { Users } from 'src/typeorm/user.entity';
import { CartController } from './controller/cart.controller';
@Module({
  imports: [TypeOrmModule.forFeature([CartEntity, ProductEntity, Users])],
  providers: [CartService, ProductsService],
  controllers: [CartController]
})
export class CartModule { }
