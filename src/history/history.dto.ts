import {isString} from '@nestjs/common/utils/shared.utils';
import {IsString, IsInt, IsNotEmpty} from 'class-validator';

export class HistoryDto{

    @IsString()
    name: string;
    description: string;
    portionsCount: number
}