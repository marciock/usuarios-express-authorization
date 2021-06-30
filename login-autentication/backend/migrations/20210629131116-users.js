'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('Users',{
      id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:Sequelize.INTEGER
      },
      name:{
        allowNull:false,
        type:Sequelize.STRING(150)
      },
      email:{
        allowNull:false,
        type:Sequelize.STRING(150)
      },
      password:{
        allowNull:false,
        type:Sequelize.STRING
      },
      permission_id:{
        allowNull:false,
        type:Sequelize.INTEGER
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
    return await queryInterface.dropTable('Users')
  }
};
