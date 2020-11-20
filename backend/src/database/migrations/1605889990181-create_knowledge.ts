import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createKnowledge1605889990181 implements MigrationInterface {

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
                    name: 'language',
                    type: 'varchar',
                },
            ],
        }));
    };

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('knowledge');
    };

}
