import axios from 'axios';
import { Request, Response, Router } from 'express';
import { doctorRepository } from '../repositories/doctorRepository';

export class SearchIdDoctorController {
  async handle(req: Request, res: Response) {
    let data_cep = {};

    try {
      const data_id = await doctorRepository.find({
        where: {
          id: req.params.id,
        },
      });

      const findZipeCode = await doctorRepository.findOneBy({
        id: req.params.cep,
      });

      const storeZipCode = await findZipeCode;
      const SearchZipCode = storeZipCode?.cep;

      //API Correios
      const getCep = async (SearchZipCode: number | undefined) => {
        return axios
          .get(`https://viacep.com.br/ws/${SearchZipCode}/json/`)
          .then(response => {
            const data = response.data;
            const information = {
              cep: data.cep,
              rua: data.logradouro,
              bairro: data.bairro,
              cidade: data.localidade,
              estado: data.uf,
            };
            data_cep = {
              ...information,
            };
          })
          .catch(error => console.log(error));
      };

      await getCep(SearchZipCode);

      data_cep = {
        ...data_cep,
        ...data_id,
      };

      res.json(data_cep);
    } catch (error) {
      return res.status(400).json({ message: 'Doctor do not exist!' });
    }
  }
}
