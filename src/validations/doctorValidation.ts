import { object, string, number, array} from "yup"

export default object({
  name: string().required(),
  crm: string().min(7).max(7).required(),
  telfix: number().required(),
  telcel: number().required(),
  cep: number().required(),
  speciality: array().required(),
})

