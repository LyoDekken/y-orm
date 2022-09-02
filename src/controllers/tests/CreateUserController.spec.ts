import request from 'supertest';
import routes from '../../routes/routes';

describe('Create Doctor Controller', () => {
  it('Should be able to create a new Doctor', async () => {
    const response = await request(routes)
      .post('/doctor')
      .send({
        name: 'gcb',
        crm: 1234567,
        telfix: 9832075674,
        telcel: 98932075674,
        cep: 50050200,
        speciality: ['Alergologista', 'Clinico'],
      });
  });
});
