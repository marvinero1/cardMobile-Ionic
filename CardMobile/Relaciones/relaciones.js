module.exports=function(Usuario, Empresa, Digitaliza, Imprenta, Imprime, Producto, Titular, Traspasa){

    Empresa.hasMany(Producto,{ foreignKey: 'id_empresa_ofrece', as:'productos_ofrece' });
    Producto.belongsTo(Empresa,{ foreignKey: 'id_empresa_ofrece', as:'empresa_ofrece'});

    Empresa.hasMany(Producto,{ foreignKey: 'id_empresa_oferta', as:'productos_oferta' });
    Producto.belongsTo(Empresa,{ foreignKey: 'id_empresa_oferta', as:'empresa_oferta'});

    //  Relacion entre empresa y usuario muchos a muchos donde creamos una tabla intermediaria llamada digitaliza
    Empresa.hasMany(Digitaliza,{foreignKey:'id_empresa', as: 'digitalizas'});
    Digitaliza.belongsTo(Empresa,{foreignKey:'id_empresa', as: 'empresas'});
    
    Usuario.hasMany(Digitaliza,{foreignKey:'id_usuario', as: 'digitaliza'});
    Digitaliza.belongsTo(Usuario,{foreignKey:'id_usuario', as:'usuarios'});

    // Relacion de m a m creando una tabla intermedia llamada traspasa entre empresa y usuarios.
    Empresa.hasMany(Traspasa,{foreignKey:'id_empresa', as:'traspasa'});
    Traspasa.belongsTo(Empresa,{foreignKey:'id_empresa', as:'empresas'});

    Usuario.hasMany(Traspasa,{foreignKey:'id_usuario_emisor', as:'traspasa_emisor'});
    Traspasa.belongsTo(Traspasa,{foreignKey:'id_usuario_emisor', as:'traspasa_emisor'});

    Usuario.hasMany(Traspasa,{foreignKey:'id_usuario_receptor', as:'traspasa_receptor'});
    Traspasa.belongsTo(Traspasa,{foreignKey:'id_usuario_receptor', as:'traspasa_recptor'});

    // Relacion entre empresa - imprenta, a traves  de una tabla imprime
    Empresa.hasMany(Imprenta,{foreignKey:'id_imprenta', as:'imprenta'});
    Imprenta.belongsTo(Empresa,{foreignKey:'id_imprenta', as:'empresa'});

    Empresa.hasMany(Imprime,{foreignKey:'id_imprenta', as: 'imprime'});
    Imprime.belongsTo(Imprenta,{foreignKey:'id_imprenta', as: 'imprenta'});

    //Relacion  de uno a uno tabla compresa titular

    Empresa.hasOne(Titular,{foreignKey:'id_empresa', as: 'titular_empresa'});
    Titular.belongsTo(Empresa,{foreignKey:'id_empresa', as: 'empresa_titular'});

    

    

    
    
}