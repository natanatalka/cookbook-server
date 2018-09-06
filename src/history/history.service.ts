import {Inject, Injectable} from '@nestjs/common';
import {Connection, Repository, UpdateResult} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {History} from './history.entity';

@Injectable()
export class HistoryService {

    constructor(private readonly connection: Connection,
                @InjectRepository(History) private readonly historyRepository: Repository<History>) {}

    async create(recipeId: number, history: History) {
        const newHistory = this.historyRepository.create(history);
        return this.historyRepository.save(newHistory);
    }

    async findAllById(id: number): Promise<History[]> {
        return this.historyRepository.find({where: {recipeId: id}});
    }

}