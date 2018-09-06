import {Inject, Injectable} from '@nestjs/common';
import {Connection, Repository, UpdateResult} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {Recipe} from './recipe.entity';
import {RecipeDto} from './recipe.dto';

@Injectable()
export class RecipeService {

    constructor(private readonly connection: Connection,
                @InjectRepository(Recipe) private readonly recipeRepository: Repository<Recipe>) {}

    async create(recipe: Recipe) {
        const newRecipe = this.recipeRepository.create(recipe);
        return this.recipeRepository.save(newRecipe);
    }

    async findAll(): Promise<Recipe[]> {
        return await this.recipeRepository.find();
    }

    async findOne(id: number): Promise<Recipe> {
        return await this.recipeRepository.findOne(id);
    }

    async update(id: number, data: RecipeDto): Promise<UpdateResult> {
        return this.recipeRepository.update(id, data);
    }
}