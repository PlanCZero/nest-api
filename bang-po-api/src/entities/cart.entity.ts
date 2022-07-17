import { Entity, OneToOne, ManyToOne, JoinColumn, Column, PrimaryGeneratedColumn } from 'typeorm'
import {Users, Products, Orders } from './index'

@Entity()
export class Carts {
   @PrimaryGeneratedColumn('uuid')
   id: number

   @Column()
   total: number

   @Column()
   quantity: number

   @ManyToOne(type => Products, order => order.id)
   @JoinColumn()
   item: Products

   @ManyToOne(type => Users, user => user.username)
   @JoinColumn()
   user: Users
}