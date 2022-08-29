import { MigrationInterface, QueryRunner } from "typeorm";

export class default1661802006898 implements MigrationInterface {
    name = 'default1661802006898'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "doctors" ("id" SERIAL NOT NULL, "name" character varying(120) NOT NULL, "crm" integer NOT NULL, "telfix" character varying(12) NOT NULL, "telcel" character varying(12) NOT NULL, "cep" integer NOT NULL, "speciality" character varying NOT NULL, CONSTRAINT "PK_8207e7889b50ee3695c2b8154ff" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "doctors"`);
    }

}
