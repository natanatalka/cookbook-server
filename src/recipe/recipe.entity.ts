import {Entity, Column, PrimaryGeneratedColumn, OneToMany, UpdateDateColumn, CreateDateColumn} from 'typeorm';
import {History} from '../history/history.entity';

@Entity()
export class Recipe{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('text')
    description: string;

    @Column()
    portionsCount: number;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: number;

    @CreateDateColumn({ type: "timestamp" })
    createdAt: number;

    @OneToMany(() => History, history => history.recipe)
    histories: History[];
}