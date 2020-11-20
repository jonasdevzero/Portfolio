import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createProjects1605890013043 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'projects',
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
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'description',
                    type: 'text',
                },
                {
                    name: 'source_link',
                    type: 'text',
                },
                {
                    name: 'about_link',
                    type: 'text'
                },
                {
                    name: 'banner_image',
                    type: 'text'
                },
                {
                    name: 'language',
                    type: 'varchar',
                },
            ],
        }));
    };

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('projects');
    };

}
