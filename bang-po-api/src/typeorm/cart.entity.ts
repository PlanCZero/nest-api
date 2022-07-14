import { Entity, OneToOne, ManyToOne, JoinColumn, Column, PrimaryGeneratedColumn } from 'typeorm'
import { OrderEntity } from './order.entity'
import { ProductEntity } from './product.entity'
import { Users } from './user.entity'

@Entity()
export class CartEntity {
   @PrimaryGeneratedColumn('uuid')
   id: number

   @Column()
   total: number

   @Column()
   quantity: number

   @ManyToOne(type => ProductEntity, order => order.id)
   @JoinColumn()
   item: ProductEntity

   @ManyToOne(type => Users, user => user.username)
   @JoinColumn()
   user: Users
}