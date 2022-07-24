import { Entity, JoinColumn, OneToMany, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Operators } from './operator.entity';
@Entity()
export class Applications {
  @PrimaryGeneratedColumn("uuid")
  id!: number

  @Column()
  name: string

  @Column()
  description: string

  @CreateDateColumn()
  createdAt: String

  @UpdateDateColumn()
  updtedAt: String

  @ManyToOne(type => Operators, operator => operator.id)
  @JoinColumn()
  operator:Operators
}