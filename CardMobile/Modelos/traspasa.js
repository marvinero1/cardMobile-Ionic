module.exports=function(sequelize,Sequelize){
    var Traspasa=sequelize.define('traspasa',{
        id_empresa:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        id_usuario_emisor:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        id_usuario_receptor:{
            type:Sequelize.INTEGER,
            allowNull:false
        }
    });

    Traspasa.sync().then(function(){

    })

    return Traspasa;
}