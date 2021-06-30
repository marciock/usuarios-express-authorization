module.exports=(Sequelize, DataType)=>{
    const Directives=Sequelize.define('Directives',{

        id:{
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
            type:DataType.INTEGER
          },
          permission_id:{
            allowNull:false,
              type:DataType.INTEGER
          },
          route:{
            allowNull:true,
            type:DataType.STRING
          },      
          createdAt:{
            allowNull:false,
            type:DataType.DATE
          },
          updatedAt:{
            allowNull:false,
            type:DataType.DATE
          }
         
    },{})
    Directives.associate=(models)=>{
        Directives.belongTo(models.Permissions,{
            oreignKey:'permission_id',
            targetKey:'id',
            as:'p'
        })
    }
}