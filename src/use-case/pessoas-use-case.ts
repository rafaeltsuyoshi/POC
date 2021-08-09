import { PessoaRepository } from "../repository/pessoa-repository"

export class PessoaUseCase{
    
    private pessoaRepository: PessoaRepository 
    constructor(){
        this.pessoaRepository = new PessoaRepository()
    }

    async getAllPessoas() {
        return await this.pessoaRepository.findAll()
    }

    async getPessoaID(id: string){        
        return await this.pessoaRepository.findByID(id)
    }
    
    async createPessoa(dados: object) {
        return await this.pessoaRepository.createPessoa(dados)
    }

    async updatePessoa(id:string, dados: object): Promise<number> {
        return await this.pessoaRepository.updatePessoa(id, dados)
    }

    async deletePessoa(id: string): Promise<number> {
        return await this.pessoaRepository.deletePessoa(id)
    }
}