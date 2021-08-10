import { Request, Response, NextFunction } from "express";
import * as Joiful from "joiful";

class PessoaBody {
  @Joiful.string().required()
  primeiroNome: string;
  @Joiful.string().required()
  sobrenome: string;
  @Joiful.number().min(18).max(110).required()
  idade: number;
  @Joiful.string().equal("M","F").required()
  sexo: string;
  @Joiful.string().regex(/^[0-9]+$/).exactLength(11).required()
  cpf: string;
  @Joiful.string().required().email()
  email: string;
}

class PessoaUpdate {
    @Joiful.string().optional()
    primeiroNome: string;
    @Joiful.string().optional()
    sobrenome: string;
    @Joiful.number().min(18).max(110).optional()
    idade: number;
    @Joiful.string().equal("M","F").optional()
    sexo: string;
    @Joiful.string().regex(/^[0-9]+$/).exactLength(11).optional()
    cpf: string;
    @Joiful.string().optional().email()
    email: string;
  }

export function validatorCreate(req: Request, res: Response, next: NextFunction) {
  const { error } = Joiful.validateAsClass(req.body, PessoaBody);

  if (error) {
    return res.status(400).json(error.details[0].message);
  }

  return next();
}

// update number postman
export function validatorUpdate(req: Request, res: Response, next: NextFunction) {
    const { error } = Joiful.validateAsClass(req.body, PessoaUpdate);
  
    if (error) {
      return res.status(400).json(error.details[0].message);
    }
  
    return next();
  }

export function validator(req: Request, res: Response, next: NextFunction) {
    return next();
  }

