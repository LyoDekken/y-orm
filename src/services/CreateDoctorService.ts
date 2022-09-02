import { doctorRepository } from '../repositories/doctorRepository';
import { doctorTypes } from '../types/doctor';

export class CreateDoctorService {
  async execute({ name, crm, telfix, telcel, cep, speciality}: doctorTypes) {

    const newDoctor = doctorRepository.create({
      name,
      crm,
      telfix,
      telcel,
      cep,
      speciality,
    });
    
    await doctorRepository.save(newDoctor)

    return newDoctor
  }
}
