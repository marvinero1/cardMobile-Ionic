module.exports=function(sequelize,Sequelize){
    var Digitaliza=sequelize.define('digitalizas',{
        id_empresa:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        id_usuario:{
            type:Sequelize.INTEGER,
            allowNull:false
        }
    });

    Digitaliza.sync().then(function(){

    });

    return Digitaliza;
}