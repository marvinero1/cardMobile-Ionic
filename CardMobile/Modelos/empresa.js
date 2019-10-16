module.exports=function(sequelize,Sequelize){
    var Empresa=sequelize.define('empresa',{
        nombre:{
            type:Sequelize.STRING,
            allowNull:true
        },
        telefono:{
            type:Sequelize.STRING,
            allowNull:true
        },
        correo_electronico:{
            type:Sequelize.STRING,
            allowNull:true
        },
        pagina_web:{
            type:Sequelize.STRING,
            allowNull:true
        },
        celular:{
            type:Sequelize.STRING,
            allowNull:true
        },
        logo:{
            type:Sequelize.STRING,
            allowNull:true
        },
        instagram:{
            type:Sequelize.STRING,
            allowNull:true
        },
        twitter:{
            type:Sequelize.STRING,
            allowNull:true
        },
        facebook:{
            type:Sequelize.STRING,
            allowNull:true
        },
        direccion:{
            type:Sequelize.STRING,
            allowNull:true
        }

    });

    Empresa.sync().then(function(){
          
    });

    return Empresa;
}