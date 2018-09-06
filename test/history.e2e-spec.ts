import request from 'supertest';
import {Test} from '@nestjs/testing';
import {AppModule} from './../src/app.module';
import {INestApplication} from '@nestjs/common';

describe('HistoryController (e2e)', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleFixture = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/POST /histories', () => {
        return request(app.getHttpServer())
            .post('/histories')
            .field('name', 'Test300')
            .field('description', 'Test300')
            .field('type', 'Test')
            .field('portionsCount', 10)
            .field('ingredients', JSON.stringify([{ count: 1, unit: 'Kg', ingredient: { id: 1, name: 'test123'}}]))
            .expect(200);
    });

    it('/GET /histories', () => {
        return request(app.getHttpServer())
            .get('/histories')
            .expect(200);
    });
});
