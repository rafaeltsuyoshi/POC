import { Table, Column, Model } from 'sequelize-typescript'


@Table({ tableName: 'pessoa' })
export class PessoaDB extends Model {
  @Column
  primeiroNome: string;

  @Column
  sobrenome: string;

  @Column
  idade: number;
  
  @Column
  sexo: string;

  @Column
  cpf: string;

  @Column
  email: string;
}

