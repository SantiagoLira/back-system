const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/negocio')
    .then(db => console.log('Conectado a la base de datos'))
    .catch(err => console.error(err));

//settings
app.set('port', process.env.PORT || 3000);

//middleware
app.use(morgan('dev')); 
app.use(express.json());
app.use(cors());

//routes
app.use('/registro',require('./routes/registro'));
app.use('/recurso',require('./routes/recurso'));
app.use('/balance',require('./routes/balance'));


//server is listening
app.listen(app.get('port'), () =>{
    console.log('server on port', app.get('port'));
});

//static files
app.use(express.static(__dirname+'/public'));