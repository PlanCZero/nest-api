import { Entity, JoinColumn, OneToMany, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Carts } from './cart.entity'
import { Quotations } from './quotation.entity';
import { Company } from './company.entity';
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

  @OneToMany(type => Quotations, quotation => quotation.id)
  @JoinColumn()
  quotations: Quotations[]

  @ManyToOne(type => Company, company => company.id)
  @JoinColumn()
  company: Company
}