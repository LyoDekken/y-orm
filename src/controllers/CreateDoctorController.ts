import axios from 'axios';
import { Request, Response, Router } from 'express';
import { CreateDoctorService } from '../services/CreateDoctorService';
import { doctorTypes } from '../types/doctor';

export class CreateDoctorController {
  async handle(req: Request, res: Response) {
    let dados = {};

    const { name, crm, telfix, telcel, cep, speciality }: doctorTypes =
      req.body;

    //API Correios
    const getCep = async (cep: number) => {
      return axios
        .get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
          const data = response.data;
          const information = {
            cep: data.cep,
            rua: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf,
          };
          dados = {
            ...information,
          };
        })
        .catch(error => console.log(error));
    };

    await getCep(cep);

    //Validação do tamanho da crm
    if (crm.toString().length !== 7) {
      return res.status(400).json({
        message: 'Digite o CRM completo',
      });
    }

    const allowSpeciality: String[] = [
      'Alergologia',
      'Angiologia',
      'Buco maxilo',
      'Cardiologia clínca',
      'Cardiologia infantil',
      'Cirurgia cabeça e pescoço',
      'Cirurgia cardíaca',
      'Cirurgia de tórax',
    ];

    //Validação do tamanho da especialidade
    if (speciality.length < 2) {
      return res.status(400).json({
        message: 'Digite a especialidade por completo',
      });
    }

    for (let i = 0; i < speciality.length; i++) {
      if (allowSpeciality.indexOf(speciality[i]) === -1) {
        return res.status(400).json({
          message: 'Digite a especialidade corretamente',
        });
      }
    }

    const service = new CreateDoctorService();

    const result = await service.execute({
      name,
      crm,
      telfix,
      telcel,
      cep,
      speciality,
    });

    dados = {
      ...result,
      ...dados,
    };

    //Validação intanceOff
    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(dados);
  }
}
