import { Entity, OneToOne, ManyToOne, JoinColumn, Column, PrimaryGeneratedColumn } from 'typeorm'
import { Users, Products, Orders } from './index'

@Entity()
export class Quotations {
  @PrimaryGeneratedColumn('uuid')
  id: number

  @Column()
  total: number

  @Column()
  quantity: number

  @ManyToOne(type => Products, product => product.id)
  @JoinColumn()
  product: Products

  @OneToOne(type => Orders, order => order.id)
  @JoinColumn()
  order: Orders
}
