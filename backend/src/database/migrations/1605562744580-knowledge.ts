import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class knowledge1605562744580 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'knowledge',
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
                    name: 'type',
                    type: 'varchar',
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'description',
                    type: 'text',
                },
                {
                    name: 'image_url',
                    type: 'text',
                },
                {
                    name: 'about_link',
                    type: 'text',
                },
                {
                    name: 'created_at',
                    type: 'varchar',
                    default: Date.now(),
                },
            ],
        }));
    };

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('knowledge');
    };

};
