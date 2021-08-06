import { NextFunction, Request, Response } from "express";
import { PessoaUseCase } from "../../../use-case/pessoas-use-case";
// const useCase = require("/home/ryamashita/Downloads/POC/src/use-case/recoverAll")
export class PessoasController {

    private pessoasUseCase: PessoaUseCase
    constructor(){
        this.pessoasUseCase = new PessoaUseCase()
    }

    async recoverAll(req: Request, res: Response, next: NextFunction): Promise<Array<any>>    {
        const pessoas = this.pessoasUseCase.getAllPessoas()
        return pessoas
    };
    async recoverbyID(req: Request, res: Response, next: NextFunction): Promise<Array<any>>{
        const {id} = req.params

        const pessoas = this.pessoasUseCase.getPessoaID(id);
        
        return pessoas
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