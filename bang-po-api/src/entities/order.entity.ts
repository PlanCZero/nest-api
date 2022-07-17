import { Entity, OneToMany, JoinColumn, OneToOne, Column, PrimaryGeneratedColumn } from 'typeorm'
import { Users, Products, Quotations, Invoices } from './index';

@Entity()
export class Orders {
   @PrimaryGeneratedColumn('uuid')
   id: number

   @OneToMany(type => Products, item => item.id)
   items: Products[];

   @OneToOne(type => Users, user => user.username)
   @JoinColumn()
   user: Users;

   @Column()
   subTotal: number

   @Column({ default: false })
   pending: boolean

   @OneToOne(type => Quotations, quotation => quotation.id)
   @JoinColumn()
   quotation: Quotations

   @OneToOne(type => Invoices, invoice => invoice.id)
   @JoinColumn()
   invoice: Invoices
}