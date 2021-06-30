module.exports=(Sequelize, DataType)=>{
    const Permissions=Sequelize.define('Permissions',{
        id:{
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
            type:DataType.INTEGER
          },
          type:{
            allowNull:false,
              type:DataType.STRING(80)
          },
          createdAt:{
            allowNull:false,
            type:DataType.DATE
          },
          updatedAt:{
            allowNull:false,
            type:DataType.DATE
          }
    })
    }