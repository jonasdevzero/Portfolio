import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1605890025234 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'path',
                    type: 'text',
                },
                {
                    name: 'project_id',
                    type: 'integer',
                },
            ],
            foreignKeys: [
                {
                    name: 'ProjectImages',
                    columnNames: ['project_id'],
                    referencedTableName: 'projects',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
            ],
        }));
    };

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images');
    };

}
