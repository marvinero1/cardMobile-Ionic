module.exports=function(sequelize,Sequelize){
    var Imprime=sequelize.define('imprime',{
        id_empresa:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        id_imprenta:{
            type:Sequelize.INTEGER,
            allowNull:false
        }
    });

    Imprime.sync().then(function(){

    })

    return Imprime;
}