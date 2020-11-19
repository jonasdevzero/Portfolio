import { MigrationInterface, QueryRunner, Table,  } from "typeorm";

export class projects1605749827603 implements MigrationInterface {

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
                }
            ],
        }));
    };

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('projects');
    };

};
