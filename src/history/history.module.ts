import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {HistoryController} from './history.controller';
import {HistoryService} from './history.service';
import {History} from './history.entity';

@Module({
    imports: [TypeOrmModule.forFeature([History])],
    controllers: [HistoryController],
    providers: [HistoryService],
})
export class HistoryModule {}