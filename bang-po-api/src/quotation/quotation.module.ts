import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { CartService } from './service/cart.service';
import { Users, Products, Carts } from 'src/entities';
import { Quotations } from 'src/entities/quotation.entity';
import { ProductsService } from 'src/product/service/product.service';
//import { CartController } from './controller/cart.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Quotations, Products, Users])],
  // providers: [CartService, ProductsService],
  // controllers: [CartController]
})
export class QuotationModule {}
