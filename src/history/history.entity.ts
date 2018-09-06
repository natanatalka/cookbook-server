import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    ManyToOne
} from 'typeorm';
import {Recipe} from '../recipe/recipe.entity';

@Entity()
export class History {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    recipeId: number;

    @Column()
    name: string;

    @Column('text')
    description: string;

    @Column()
    portionsCount: number;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: number;

    @ManyToOne(() => Recipe, recipe => recipe.histories)
    recipe: Recipe;
}