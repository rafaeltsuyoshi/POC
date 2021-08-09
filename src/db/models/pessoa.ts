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

  @Column({field: "CPF"})
  cpf: string;

  @Column
  email: string;

  @Column({field: "created_at"})
  createdAt: Date;

  @Column({field: "updated_at"})
  updatedAt: Date;

}

