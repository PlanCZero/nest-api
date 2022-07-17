import { Entity,OneToMany, OneToOne, ManyToOne, JoinColumn, Column, PrimaryGeneratedColumn } from 'typeorm'
import { Users, Products, Orders } from './index'

@Entity()
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: number

  @Column()
  name:string

  @OneToMany(type => Products, product => product.id)
  @JoinColumn()
  quotations: Products[]
}