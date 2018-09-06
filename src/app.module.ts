import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Connection} from 'typeorm';
import {RecipeModule} from './recipe/recipe.module';
import * as database from './config/database';
import * as path from 'path';
import { ConfigModule, ConfigService } from "nestjs-config";
import {HistoryModule} from './history/history.module';

@Module({
    imports: [
        ConfigModule.load(
            path.resolve(__dirname, 'config/**/*.{ts,js}'),
        ),
        TypeOrmModule.forRoot( {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'cookbook',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
        }), RecipeModule, HistoryModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    constructor(private readonly connection: Connection) {
    }
}