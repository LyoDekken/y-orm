import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("doctors")
export class Doctor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 120 })
  name: string;

  @Column("varchar", { length: 12 })
  crm: string;

  @Column("varchar", { length: 12 })
  telfix: string;

  @Column("varchar", { length: 12 })
  telcel: string;

  @Column({ type: "int" })
  cep: number;

  @Column()
  speciality: string; 
}
