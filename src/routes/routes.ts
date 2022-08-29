import { Router } from 'express'
import CrudDoctorController from '../controllers/DoctorController'

const routes = Router()

routes.use('/doctor', CrudDoctorController)

export default routes
