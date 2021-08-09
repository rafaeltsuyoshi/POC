import { PessoaRepository } from "../repository/pessoa-repository"
import { Sequelize } from "sequelize"
import { PessoaDB } from "../db/models/pessoa"
export class PessoaUseCase{
    
    private pessoaRepository: PessoaRepository 
    constructor(){
        this.pessoaRepository = new PessoaRepository()
    }

    async getAllPessoas(): Promise<Array<any>>{
        const pessoas = this.pessoaRepository.findAll()
        return []
    }

    async getPessoaID(ID: string){        
        return []
    }
    
    async createPessoa(dados: object) {
        const pessoa = await this.pessoaRepository.createPessoa(dados)
        return pessoa
    }

    async deletePessoa(id: string): Promise<number> {
        const response = this.pessoaRepository.deletePessoa(id)
        return response
    }
}