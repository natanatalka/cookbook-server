import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Recipe} from './recipe.entity';
import {RecipeController} from './recipe.controller';
import {RecipeRepository} from './recipe.repository';
import {RecipeService} from './recipe.service';

@Module({
    imports: [TypeOrmModule.forFeature([Recipe, RecipeRepository])],
    controllers: [RecipeController],
    providers: [RecipeService],
})
export class RecipeModule {}