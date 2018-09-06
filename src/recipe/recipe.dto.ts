import {IsString, IsInt, IsNotEmpty} from 'class-validator';

export class RecipeDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsInt()
    @IsNotEmpty()
    portionsCount: number;
}