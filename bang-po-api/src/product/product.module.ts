import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from 'src/typeorm';
import { ProductsService } from './service/product.service';
import { ProductsController } from './controller/product.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductModule { }
