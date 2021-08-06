import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import { PessoaDB } from './pessoa'
const config = require('../../config/config')

const models = [
    PessoaDB
]

export const init = (): Sequelize => {
  const sequelize = new Sequelize(config as SequelizeOptions)
  sequelize.addModels([...models])
  return sequelize
}