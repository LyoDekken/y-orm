import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662149047659 implements MigrationInterface {
    name = 'default1662149047659'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "doctors" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(120) NOT NULL, "crm" character varying(7) NOT NULL, "telfix" character varying(13) NOT NULL, "telcel" character varying(13) NOT NULL, "cep" character varying(8) NOT NULL, "speciality" character varying array NOT NULL, CONSTRAINT "PK_8207e7889b50ee3695c2b8154ff" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "doctors"`);
    }

}
