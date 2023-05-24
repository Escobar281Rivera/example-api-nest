import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Rol{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    rol: string

    @Column({default: true})
    isActive: boolean
}