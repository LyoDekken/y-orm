import { Request, Response } from 'express';
import { doctorRepository } from '../repositories/doctorRepository';

export class UpdateIdDoctorService {
  async execute(req: Request, res: Response, id: string) {
    const repo = doctorRepository;

    const task = await repo.update(id, req.body);

    if (task.affected === 1) {
      const taskUpdate = await doctorRepository.findOne({
        where: {
          id,
        },
      });

      return res.json(taskUpdate);
    }
    return res.status(404).json({ message: 'Task not found' });
  }
}
