import { PessoaDB } from "../db/models/pessoa"

export class PessoaRepository{
    constructor(){
        
    }

    public async findAll(){
        return await PessoaDB.findAll()
    }

    public async createPessoa(dados: any){
        try{
        const userToSave = new PessoaDB({ ...dados })

        return await userToSave.save()
        
        } catch(err){   
            console.error(`Error create pessoa ${err}`)
        }
    }

    public async deletePessoa(id: string): Promise<number>{
        return await PessoaDB.destroy({ where: { id: id } }) 
    }
}