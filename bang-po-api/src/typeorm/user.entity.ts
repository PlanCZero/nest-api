import { Entity, OneToOne, JoinColumn, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { CartEntity } from './cart.entity';
import { OrderEntity } from './order.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  username: string;

  @Column()
  password: string

  @Column()
  role: string

  @CreateDateColumn()
  createdAt: String

  @UpdateDateColumn()
  updtedAt: String

  @OneToMany(type => CartEntity, cart => cart.id)
  @JoinColumn()
  cart: CartEntity[]

  @OneToOne(type => OrderEntity, order => order.id)
  @JoinColumn()
  order: OrderEntity;
}