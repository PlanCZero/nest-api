import { Entity, OneToOne, JoinColumn, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Carts ,Orders} from './index';

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

  @OneToMany(type => Carts, cart => cart.id)
  @JoinColumn()
  cart: Carts[]

  @OneToOne(type => Orders, order => order.id)
  @JoinColumn()
  order: Orders;
}