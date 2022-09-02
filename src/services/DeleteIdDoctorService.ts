import { doctorRepository } from '../repositories/doctorRepository';

export class DeleteIdDoctorService {
  async execute(id: string) {
    const repo = doctorRepository;

    if (!(await repo.findOne({
        where: {
          id,
        },
      }))
    ) {
      return new Error('Doctor does not exists!');
    }

    return await repo.delete(id);
  }
}
