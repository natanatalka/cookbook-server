import {Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put} from '@nestjs/common';
import {RecipeService} from './recipe.service';
import {Recipe} from './recipe.entity';
import {Connection, UpdateResult} from 'typeorm';
import {RecipeDto} from './recipe.dto';

@Controller('recipes')
export class RecipeController {

    constructor(private readonly recipeService: RecipeService) {}

    @Get()
    async findAll(): Promise<Recipe[]> {
        return await this.recipeService.findAll();
    }

    @Get(':id')
    async findOne(@Param() id): Promise<Recipe> {
        return await this.recipeService.findOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.OK)
    async create(@Body() recipe: Recipe) {
        return this.recipeService.create(recipe);
    }

    @Put(':id')
    async update(@Param() id, @Body() body: RecipeDto){
       await this.recipeService.update(id, body);
    }

}