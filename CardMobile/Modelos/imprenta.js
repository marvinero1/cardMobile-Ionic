module.exports=function(sequelize,Sequelize){
    var Imprenta=sequelize.define('imprenta',{
        nombre:{
            type:Sequelize.STRING,
            allowNull:false
        },
        direccion:{
            type:Sequelize.STRING,
            allowNull:false
        },
        telefono:{
            type:Sequelize.STRING,
            allowNull:false
        },
        celular:{
            type:Sequelize.STRING,
            allowNull:false
        },
        contacto:{
            type:Sequelize.STRING,
            allowNull:false
        },
        precio:{
            type:Sequelize.DOUBLE,
            allowNull:false
        },

        id_empresa:{
            type:Sequelize.STRING,
            allowNull:false
        }
    });

    Imprenta.sync().then(function(){

    });

    return Imprenta;
}