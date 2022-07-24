import { Entity, JoinColumn, OneToMany, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Applications } from './application.entity';
import { Company } from './company.entity';
@Entity()
export class Operators {
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

  @OneToMany(type => Applications, application => application.id)
  @JoinColumn()
  applications: Applications[]

}