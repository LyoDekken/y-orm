import { Request, Response, Router } from 'express';
import { doctorRepository } from "../repositories/doctorRepository";

const CrudDoctorController = Router();

CrudDoctorController.get('/', async (req: Request, res: Response) => {
  res.json(await doctorRepository.find())
});

CrudDoctorController.post('/', async (req: Request, res: Response) => {
    const { name, crm, telfix, telcel, cep, speciality } = req.body;

    if (!name || !crm || !telcel || !telcel || !cep || !speciality) {
      return res.status(400).json({
        message: "Digite todos os componentes",
      });
    } else if (crm.length != 7) {
      return res.status(400).json({
        message: "Digite o CRM completo",
      });
    } else if (Number(telfix) === NaN || Number(telcel) === NaN || Number(crm)) {
      return res.status(400).json({
        message: "Internal server error",
      });
    }

    try {
      const newDoctor = doctorRepository.create({
        name,
        crm,
        telfix,
        telcel,
        cep,
        speciality,
      });

      await doctorRepository.save(newDoctor);
      return res.status(201).json(newDoctor);
    } catch (error) {
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  }
);

CrudDoctorController.get('/:crm', async (req: Request, res: Response) => {
  const data_crm  = await doctorRepository.find({
    where: {
      crm: req.params.crm
    },
  });
  res.json(data_crm)
});

export default CrudDoctorController;
