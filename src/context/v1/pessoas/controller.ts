import { NextFunction, Request, Response } from "express";
// const useCase = require("/home/ryamashita/Downloads/POC/src/use-case/recoverAll")

export class PessoasController {
    async recoverAll(req: Request, res: Response, next: NextFunction): Promise<boolean> {
        return true
        //   useCase.recoverAll(req, res)
    };
    async recoverbyID(req: Request, res: Response, next: NextFunction): Promise<boolean>{
        return true
    };
    async create(req: Request, res: Response, next: NextFunction): Promise<boolean>{
        if(req.body){
            return true
        }
        return false
    };
    async updatebyID(req: Request, res: Response, next: NextFunction): Promise<boolean>{
        if(req.body){
            return true
        }
        return false
    };
    async deletebyID(req: Request, res: Response, next: NextFunction): Promise<boolean>{
        return true

    };
  }