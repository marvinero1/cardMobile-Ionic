module.exports=function(sequelize,Sequelize){
    var Producto=sequelize.define('producto',{
        nombre:{
            type:Sequelize.STRING,
            allowNull:false
        },
        descripcion:{
            type:Sequelize.STRING,
            allowNull:false
        },
        precio_unitario:{
            type:Sequelize.DOUBLE,
            allowNull:false
        },
        codigo:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        imagen:{
            type:Sequelize.STRING,
            allowNull:false
        },

        id_empresa_ofrece:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        id_empresa_oferta:{
            type:Sequelize.INTEGER,
            allowNull:false
        }

        
    });

    Producto.sync().then(function(){

    });

    return Producto;
}