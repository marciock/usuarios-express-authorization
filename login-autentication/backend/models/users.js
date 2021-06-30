module.exports=(Sequelize, DataType)=>{
    const Users=Sequelize.define('Users',{
        id:{
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
            type:DataType.INTEGER
          },
          name:{
            allowNull:false,
            type:DataType.STRING(150)
          },
          email:{
            allowNull:false,
            type:DataType.STRING(150)
          },
          password:{
            allowNull:false,
            type:DataType.STRING
          },
          permission_id:{
            allowNull:false,
            type:DataType.INTEGER
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

    Users.associate=(models)=>{
        Users.belongTo(models.Permissions,{
            oreignKey:'permission_id',
            targetKey:'id',
            as:'p'
        })
    }
}