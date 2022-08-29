import { MigrationInterface, QueryRunner } from "typeorm";

export class default1661805100209 implements MigrationInterface {
    name = 'default1661805100209'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "doctors" DROP COLUMN "crm"`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD "crm" character varying(12) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "doctors" DROP COLUMN "crm"`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD "crm" integer NOT NULL`);
    }

}
