var express = require('express'); var app = express();
var http =require('http').Server(app);
var bodyParser = require('body-parser');
var router = express.Router(); 
var cors    = require('cors');
var Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('cardmobile', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

var Usuario=require('./Modelos/usuario')(sequelize,Sequelize);
var Empresa=require('./Modelos/empresa')(sequelize,Sequelize);
var Digitaliza=require('./Modelos/digitaliza')(sequelize,Sequelize);
var Imprenta=require('./Modelos/imprenta')(sequelize,Sequelize);
var Imprime=require('./Modelos/imprime')(sequelize,Sequelize);
var Producto=require('./Modelos/producto')(sequelize,Sequelize);
var Titular=require('./Modelos/titular')(sequelize,Sequelize);
var Traspasa=require('./Modelos/traspasa')(sequelize,Sequelize);


require('./Relaciones/relaciones')(Usuario, Empresa, Digitaliza, Imprenta, Imprime, Producto, Titular, Traspasa);
require('./rutas/index')(router,Empresa, Titular);

var port = process.env.PORT || 5959;        // set our port

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser({limit: '20mb'}));
app.use(bodyParser.json());
app.use(cors());


router.get('/',function(req,res){
    res.json({ mensaje:"Bienvenido a la api de pruebas!" });
});

app.use('/cardmobile', router);

http.listen(port);
console.log('Se empieza a escuchar solicitudes desde el puerto ' + port);