import { NextFunction, Request, Response } from "express";
import { PessoaUseCase } from "../../../use-case/pessoas-use-case";
// const useCase = require("/home/ryamashita/Downloads/POC/src/use-case/recoverAll")
export class PessoasController {

    private pessoasUseCase: PessoaUseCase
    constructor(){
        this.pessoasUseCase = new PessoaUseCase()
    }

    async recoverAll(req: Request, res: Response, next: NextFunction): Promise<any[]>    {
        try{
            const pessoas = await this.pessoasUseCase.getAllPessoas()
            
            // res.json(pessoas)
            return pessoas
            
        } catch(err) {
            // return res.status(500).send(err)
            throw err
        }
    };

    async recoverbyID(req: Request, res: Response, next: NextFunction): Promise<Response>{
        try{
            const {id} = req.params

            const pessoa = await this.pessoasUseCase.getPessoaID(id);
            
            return res.json(pessoa)
        
        } catch(err) {
            return res.status(500).send(err)
        }
    };
    async create(req: Request, res: Response, next: NextFunction): Promise<Response>{

        try{
            if(req.body.primeiroNome){

                const dados = {
                    ...req.body
                }
                
                const pessoa = await this.pessoasUseCase.createPessoa(dados)        
                
                return res.status(201).json(pessoa)
            } else {
                throw new Error("No data was send")
            }
        } catch(err) {
            return res.status(500).send(err.message)
        }
    };
    async updatebyID(req: Request, res: Response, next: NextFunction): Promise<Response>{
        try{
            const {id} = req.params

            if(Object.keys(req.body).length > 0){

                const dados = {
                    ...req.body
                }

                const response = await this.pessoasUseCase.updatePessoa(id, dados)        

                if(response === 1){
                    res.send({
                        message: "Person was updated successfully."
                    })
                } else {
                    res.status(500).send({
                        message: `Cannot update Person with id=${id}.`
                        });
                } 
            } else {
                throw new Error("No data was send")
            }
        
        } catch(err) {
            return res.status(500).send(err.message)
        }
    };
    async deletebyID(req: Request, res: Response, next: NextFunction): Promise<Response>{
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