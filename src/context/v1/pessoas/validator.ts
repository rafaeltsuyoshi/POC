import { Request, Response, NextFunction } from "express";
import * as Joiful from "joiful";

class PessoaBody {
  @Joiful.string().required()
  primeiroNome: string;
  @Joiful.string().required()
  sobrenome: string;
  @Joiful.number().required()
  idade: number;
  @Joiful.string().required()
  sexo: string;
  @Joiful.string().required()
  cpf: string;
  @Joiful.string().required().email()
  email: string;
}

export function validatorCreate(req: Request, res: Response, next: NextFunction) {
  const { error } = Joiful.validateAsClass(req.body, PessoaBody);

  if (error) {
    return res.status(400).json(error.details[0].message);
  }

  return next();
}

export function validator(req: Request, res: Response, next: NextFunction) {
  
    return next();
  }

