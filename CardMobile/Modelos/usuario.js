module.exports=function(sequelize,Sequelize){
    var Usuario=sequelize.define('usuario',{
        nombre:{
            type:Sequelize.STRING,
            allowNull:false
        },
        telefono:{
            type:Sequelize.STRING,
            allowNull:false
        },
        fecha_registro:{
            type:Sequelize.DATE,
            allowNull:false
        },
        nombre_completo:{
            type:Sequelize.STRING,
            allowNull:false
        },
        nombre_usuario:{
            type:Sequelize.STRING,
            allowNull:false
        },
        clave:{
            type:Sequelize.INTEGER,
            allowNull:false
        }
        
    });

    Usuario.sync().then(function(){

    });

    return Usuario;
}