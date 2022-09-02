import { Request, Response } from 'express';
import { DeleteIdDoctorService } from '../services/DeleteIdDoctorService';

export class DeleteIdDoctorController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const service = new DeleteIdDoctorService();

    try {
      const result = await service.execute(id);

      if (result instanceof Error) {
        return res.status(400).json(res);
      } else {
        return res.status(204).json({
          message: 'Usuario Deletado',
        });
      }
    } catch (error) {
      return res.status(400).json({messsage: 'Doctor do not exist"'});
    }
  }
}
