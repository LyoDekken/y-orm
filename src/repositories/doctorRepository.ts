import { AppDataSource } from '../data-source'
import { Doctor } from '../models/Doctor'

export const doctorRepository = AppDataSource.getRepository(Doctor)