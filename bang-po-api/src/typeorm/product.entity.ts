import { Entity, JoinColumn, OneToMany, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm'
import { Carts } from './cart.entity'

@Entity()
export class Products {
  @PrimaryGeneratedColumn("uuid")
  id!: number

  @Column()
  name: string

  @Column()
  price: number

  @Column()
  quantity: string

  @CreateDateColumn()
  createdAt: String

  @UpdateDateColumn()
  updtedAt: String

  @OneToMany(type => Carts, cart => cart.id)
  @JoinColumn()
  cart: Carts[]
}