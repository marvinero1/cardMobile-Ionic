module.exports=function(router, Empresa, Titular){
    router.post('/empresa', function(req, res){
        Empresa.create({
            nombre:req.body.nombre,
            telefono:req.body.telefono,
            correo_electronico:req.body.correo_electronico,
            pagina_web:req.body.pagina_web,
            celular:req.body.celular,
            logo:req.body.logo,
            instagram:req.body.instagram,
            twitter:req.body.twitter,
            facebook:req.body.facebook,
            direccion:req.body.direccion
        // aqui se establece entre empresa y titutlar.
        }).then(function(empresaCreada){
            Titular.create({
                nombre:req.body.titular.nombre,
                codigo:req.body.titular.codigo,
                id_empresa:empresaCreada.id
            }).then(function(titular_creado){
                res.json({mensaje:"La empresa fue registrada exitosamente junto a su titular",
                empresa:empresaCreada,
                titular:titular_creado
                });
            });
           
        });
        
    });

    //Ruta para para hacer el PUT 

    router.put('/empresa/:id_empresa', function(req, res){
        Empresa.update({
            nombre:req.body.nombre,
            telefono:req.body.telefono,
            correo_electronico:req.body.correo_electronico,
            pagina_web:req.body.pagina_web,
            celular:req.body.celular,
            logo:req.body.logo,
            instagram:req.body.instagram,
            tittwer:req.body.tittwer,
            facebook:req.body.facebook,
            direccion:req.body.direccion
        // aqui se establece entre empresa y titutlar.
        },{
            where:{
                id:req.params.id_empresa
            }
        }).then(function(filasAfectadas){
            Titular.update({
                nombre:req.body.titular.nombre,
                codigo:req.body.titular.codigo,
            },{
                where:{
                    id:req.body.titular.id
                }
            }).then(function(filasAfectadasTitular){
                res.json({mensaje:"La empresa fue actualizada exitosamente junto a su titular"
                });
            });
           
        });
        
    });

    // ruta para hacer el GET

    router.get('/empresa/:id_empresa', function(req, res){
        Empresa.findAll({
            where:{
                id:req.params.id_empresa
            },
            include:[{
                model:Titular,as:'titular_empresa'
            }]
        }).then(function(empresaEncontrada){
            res.json(empresaEncontrada);
           
        });
        
    });
    
    // ruta para hacer DELETE

    router.delete('/empresa/:id_empresa', function(req, res){
        Empresa.destroy({
            where:{id:req.params.id_empresa}
        }).then(function(empresaEliminada){
            Titular.destroy({
                where:{id_empresa:req.params.id_empresa}
            }).then (function(titularEliminada){
                res.json({mensaje:"La empresa fue eliminada exisitasamente"})
            })
        })
    })
}