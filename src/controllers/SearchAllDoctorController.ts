import { Request, Response } from 'express';
import { doctorRepository } from '../repositories/doctorRepository';

export class SearchAllDoctorController {
  async handle(req: Request, res: Response) {
    res.json(await doctorRepository.find());
  }
}
