import {MigrationInterface, QueryRunner, Table, TableForeignKey, TableIndex} from 'typeorm';

export class RecipeMigration implements MigrationInterface {

    async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "recipe",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "description",
                    type: "text",
                },
                {
                    name: "portionsCount",
                    type: "integer",
                },
                {
                    name: "createdAt",
                    type: "timestamp",
                }
            ]
        }), true)
    }

    async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("recipe");
    }

}