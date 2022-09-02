import { NextFunction, Request, Response } from 'express';
import { AnySchema } from 'yup';

const validate = (schema: AnySchema) => async (req: Request, res: Response, next: NextFunction) => {

    const body = req.body

    try {
      await schema.validate(body);

      next()
    } catch (error) {
        return res.status(400).json({error})
    }
  };

export default validate;
