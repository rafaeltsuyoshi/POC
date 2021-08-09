import { NextFunction, Request, Response } from "express";
import { json } from "sequelize/types";
import { PessoaUseCase } from "../../../use-case/pessoas-use-case";
// const useCase = require("/home/ryamashita/Downloads/POC/src/use-case/recoverAll")
export class PessoasController {

    private pessoasUseCase: PessoaUseCase
    constructor(){
        this.pessoasUseCase = new PessoaUseCase()
    }

    async recoverAll(req: Request, res: Response, next: NextFunction): Promise<Array<any>>    {
        try{
            const pessoas = await this.pessoasUseCase.getAllPessoas()
            
            return res.json(pessoas)
            
        } catch(err) {
            return res.status(500).send(err)
        }
    };

    async recoverbyID(req: Request, res: Response, next: NextFunction): Promise<Array<any>>{
        const {id} = req.params

        const pessoas = this.pessoasUseCase.getPessoaID(id);
        
        return pessoas
    };
    async create(req: Request, res: Response, next: NextFunction): Promise<any>{

        try{
            if(req.body){

                const dados = {
                    primeiroNome: req.body.primeiroNome,
                    sobrenome: req.body.sobrenome,
                    idade: req.body.idade,
                    sexo: req.body.sexo,
                    cpf: req.body.cpf,
                    email: req.body.email
                }

                const pessoa = await this.pessoasUseCase.createPessoa(dados)        
                
                return res.status(201).json(pessoa)
            } else {
                throw new Error("No data was send")
            }
        } catch(err) {
            return res.status(500).send(err)
        }
    };
    async updatebyID(req: Request, res: Response, next: NextFunction): Promise<boolean>{
        if(req.body){
            return true
        }
        return false
    };
    async deletebyID(req: Request, res: Response, next: NextFunction): Promise<any>{
        try{
            const {id} = req.params

            const response = await this.pessoasUseCase.deletePessoa(id)     

            if(response === 1){
                res.send({
                    message: "Person was deleted successfully!"
                })
            } else {
                res.status(500).send({
                    message: "Could not delete Pessoa with id=" + id
                    });
            } 
            
        } catch(err) {
            return res.status(500).send(err)
        }

    };
  }