import { Injectable, UnauthorizedException } from '@nestjs/common';
import {Users, Products } from 'src/entities';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Products) private productRepository: Repository<Products>) { }

  async getAll(): Promise<Products[]> {
    return await this.productRepository.find()
  }

  async create(product: Products, user: Users): Promise<Products> {
    if (user.role == 'admin') {
      return await this.productRepository.save(product);

    }
    throw new UnauthorizedException();

  }

  async getOne(id: number): Promise<Products> {
    return this.productRepository.findOne({ where: { id: id } });
  }

  async update(id: number, product: Products, user: Users): Promise<UpdateResult> {
    if (user.role == 'admin') {
      return await this.productRepository.update(id, product);
    }
    throw new UnauthorizedException();
  }

  async delete(id: number, user: Users): Promise<DeleteResult> {
    if (user.role == 'admin') {
      return await this.productRepository.delete(id);
    }
    throw new UnauthorizedException();
  }

}