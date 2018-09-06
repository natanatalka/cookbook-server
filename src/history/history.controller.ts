import {Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put} from '@nestjs/common';
import {HistoryService} from './history.service';
import {History} from './history.entity';

@Controller('histories')
export class HistoryController {

    constructor(private readonly historyService: HistoryService) {}

    @Get('/:recipeId')
    async findAllById(@Param() recipeId): Promise<History[]> {
        return await this.historyService.findAllById(recipeId);
    }

    @Post('')
    @HttpCode(HttpStatus.OK)
    async create(@Param() recipeId, @Body() history: History) {
        return this.historyService.create(recipeId, history);
    }
}