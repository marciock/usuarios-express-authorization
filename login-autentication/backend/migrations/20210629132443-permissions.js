'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return await queryInterface.createTable('Permissions',{
    id:{
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
      type:Sequelize.INTEGER
    },
    type:{
      allowNull:false,
        type:Sequelize.STRING(80)
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
    return await queryInterface.dropTable('Permissions')
  }
};
