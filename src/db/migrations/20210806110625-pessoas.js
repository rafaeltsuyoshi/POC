'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('pessoa', { 
      primeiroNome: {
        type: Sequelize.STRING
      },
      sobrenome: {
        type: Sequelize.STRING
      },
      idade: {
        type: Sequelize.INTEGER
      },
      sexo: {
        type: Sequelize.STRING
      },
      CPF: {
        type: Sequelize.STRING(11)
      },
      email: {
        type: Sequelize.STRING
      }
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
     
  }
};
