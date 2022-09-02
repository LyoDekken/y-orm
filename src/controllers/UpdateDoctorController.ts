import { Request, Response } from 'express';
import { UpdateIdDoctorService } from '../services/UpdateDoctorService';

export class UpdateDoctorController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const service = new UpdateIdDoctorService();

    try {
      const result = await service.execute(req, res, id);

      if (result instanceof Error) {
        return res.status(400).json(res);
      } 
  
    } catch (error) {
    return res.status(400).json({message: 'Doctor do not exist!'});
    }
  }
}
