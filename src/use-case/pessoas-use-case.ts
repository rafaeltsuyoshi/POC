import { PessoaRepoitory } from "../repository/pessoa-repository"

export class PessoaUseCase{
    
    private pessoaRepository: PessoaRepoitory 
    constructor(){
        this.pessoaRepository = new PessoaRepoitory()
    }

    async getAllPessoas(){
        const pessoas = this.pessoaRepository
        return []
    }

    async getPessoaID(ID: string){        
        return []
    }

}