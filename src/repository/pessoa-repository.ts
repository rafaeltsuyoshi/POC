import { PessoaDB } from "../db/models/pessoa"

export class PessoaRepository{
    constructor(){
        
    }

    public async findAll(){
        try{
            return await PessoaDB.findAll()

        } catch(err){   
                console.error(`Error findAll People ${err}`)
        }
    }

    public async findByID(id: string){
        try {
            return await PessoaDB.findByPk(id)
        
        } catch(err) {
            console.error(`Error findByID ${err}`)
        }
    }

    public async createPessoa(dados: object){
        try{
        const userToSave = new PessoaDB({ ...dados })

        return await userToSave.save()
        
        } catch(err){   
            console.error(`Error create pessoa ${err}`)
        }
    }

    public async updatePessoa(id: string, dados: object): Promise<number> {
        try {
            const response = await PessoaDB.update(dados, { where: {id: id} })
            return response[0]     
        } catch(err) {
            console.error(`Error update Person ${err}`)
        }
    }

    public async deletePessoa(id: string): Promise<number>{
        try {
            return await PessoaDB.destroy({ where: { id: id } }) 
        } catch(err) {
            console.error(`Error delete Person ${err}`)
        }
    }
}