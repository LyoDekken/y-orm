import { doctorRepository } from '../../repositories/doctorRepository';
import { doctorTypes } from '../../types/doctor';
import { CreateDoctorService } from '../CreateDoctorService';

describe('Create new Doctor', () => {
  it('it should be possible to create a doctor', async () => {
    const createNewDoctorService = new CreateDoctorService();

    const arm = async ({
      name,
      crm,
      telfix,
      telcel,
      cep,
      speciality,
    }: doctorTypes) => {

      const newDoctor = doctorRepository.create({
        name: 'gcb',
        crm: 1234567,
        telfix: 9832075674,
        telcel: 98932075674,
        cep: 50050200,
        speciality: ['Alergologista', 'Clinico'],
      });

      const result = await createNewDoctorService.execute({
        name,
        crm,
        telfix,
        telcel,
        cep,
        speciality,
      });

      expect(result).toHaveProperty('id');
      expect(result.name).toBe('Paulo');
      expect(result.crm).toBe(1234567);  
      expect(result.cep).toBe(50050200);    
      expect(result.telcel).toBe(98932075674);
      expect(result.telfix).toBe(9832075674);
      expect(result.speciality).toBe(['Alergologista', 'Clinico']);
    };
  });
});
