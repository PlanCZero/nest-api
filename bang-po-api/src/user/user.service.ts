/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user.dto';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users) private readonly userRepository: Repository<Users>,
  ) { }
  createUser(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }
  getUsers() {
    return this.userRepository.find();
  }
  
  findUsersById(id: number) {
    return this.userRepository.findOne({ where: { id: id } });
  }
}
