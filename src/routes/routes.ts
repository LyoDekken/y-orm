import { Request, Response, Router } from 'express'
import { CreateDoctorController } from '../controllers/CreateDoctorController'
import { DeleteIdDoctorController } from '../controllers/DeleteIdDoctorController'
import { SearchAllDoctorController } from '../controllers/SearchAllDoctorController'
import { SearchIdDoctorController } from '../controllers/SearchIdDoctorController'
import { UpdateDoctorController } from '../controllers/UpdateDoctorController'
import validate from '../middlewares/validationMiddlewares'
import userSchema from '../validations/doctorValidation'

const routes = Router()

//Aplication is running
routes.get("/", (req: Request, res: Response) => {
    return res.json({ message: '🏃 Running Server' })
})

//Criar Doutor
routes.post("/doctor", validate(userSchema), new CreateDoctorController().handle)

//Buscar Doutor pelo Id
routes.get("/doctor/:id", new SearchIdDoctorController().handle)

//Todos Doutores cadastrados
routes.get("/doctor", new SearchAllDoctorController().handle)

//Atualizar Doutor
routes.put("/doctor/:id", validate(userSchema), new UpdateDoctorController().handle)

//Deletar Doutor
routes.delete("/doctor/:id", new DeleteIdDoctorController().handle)

export default routes
