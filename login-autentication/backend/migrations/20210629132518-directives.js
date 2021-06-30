'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('Directives',{
      id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:Sequelize.INTEGER
      },
      permission_id:{
        allowNull:false,
          type:Sequelize.INTEGER
      },
      route:{
        allowNull:true,
        type:Sequelize.STRING
      },      
      createdAt:{
        allowNull:false,
        type:Sequelize.DATE
      },
      updatedAt:{
        allowNull:false,
        type:Sequelize.DATE
      }
     })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Directives')
  }
};
