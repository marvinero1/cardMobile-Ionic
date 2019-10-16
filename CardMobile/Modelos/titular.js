module.exports=function(sequelize,Sequelize){
    var Titular=sequelize.define('titular',{
        nombre:{
            type:Sequelize.STRING,
            allowNull:true
        },
        codigo:{
            type:Sequelize.INTEGER,
            allowNull:true
        },

        id_empresa:{
            type:Sequelize.INTEGER,
            allowNull:true
        }
        
    });

    Titular.sync().then(function(){
        
    });

    return Titular;
}