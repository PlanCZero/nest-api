import { Controller, Post, Get, Put, Delete, Param, Request, Body, UseGuards } from '@nestjs/common';
import { UpdateResult, DeleteResult } from 'typeorm';
import { ProductsService } from '../service/product.service';
import { Products } from 'src/entities';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/v1/products')
export class ProductsController {
  constructor(private productsService: ProductsService) { }

  @UseGuards(JwtAuthGuard)
  @Get()
  async GetAll(): Promise<Products[]> {
    return await this.productsService.getAll();

  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async Create(@Request() req, @Body() product: Products): Promise<Products> {
    return await this.productsService.create(product, req.user);
  }


  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async GetOne(@Param() id: number): Promise<Products> {
    return await this.productsService.getOne(id);

  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async Update(@Param() id: number, @Body() product: Products, @Request() req): Promise<UpdateResult> {
    return await this.productsService.update(id, product, req.user);

  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async Delete(@Param() id: number, @Request() req): Promise<DeleteResult> {
    return await this.productsService.delete(id, req.user);

  }
}