const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors())

// Directorio Público
app.use( express.static('public') );

// Lectura y parseo del body
app.use( express.json() );

// Rutas
app.use('/api/auth', require('./routes/auth') );
app.use('/api/events', require('./routes/events') );

// !rutas nuevas a implementar
app.use('/api/promotions', require('./routes/promotions') );
app.use('/api/memberships', require('./routes/memberships') );
app.use('/api/partnerPrograms', require('./routes/partnerPrograms') );

// comodin para que cualquier ruta (a exepcion de las antes especificadas) sirva el archivo index
app.get('*', (req, resp) => {
    resp.sendFile(__dirname + '/public/index.html')
})



// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});






