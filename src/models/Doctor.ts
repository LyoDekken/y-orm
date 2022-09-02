import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('doctors')
export class Doctor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 120 })
  name: string;

  @Column('varchar', { length: 7 })
  crm: number;

  @Column('varchar', { length: 13 })
  telfix: number;

  @Column('varchar', { length: 13 })
  telcel: number;

  @Column('varchar', { length: 8 })
  cep: number;

  @Column({ type: "varchar", array: true })
  speciality: string[];
}
