const express = require('express');
const SerialPort = require('serialport');
//const dataBase = require('mysql');
const puerto = 4000; //puerto por donde se abrira la conexion
let datos = 5;
let solicitud = "Datos solicitados"

const app = express(); //creado el objeto para usar express

//generamos el servidor con express
const server = app.listen(puerto, ()=>{
    console.log(`Servidor abierto en el puerto ${puerto}`); //confirmo por donde está abierto el servidor
})

//se vincula el servidor de socket.io con el server de express
const io = require('socket.io')(server); 
//const ver = io.connect()
app.use(express.static('public'));

io.on('connection',(socket)=>{
    console.log("Cliente conectado");
    //console.log(datos);
    io.emit('data',datos);
    io.emit('solicitud',solicitud);
})

/*

const ReadLine = SerialPort.parsers.Readline;

//const ReadLine = require('@serialport/parser-readline')
const port = new SerialPort("/dev/ttyUSB0");
const parser = new ReadLine({delimiter: '\r\n'});
port.pipe(parser);
*/

//const parser = port.pipe(new ReadLine({delimiter: '\r\n'}));


//temporal descativado
/*
parser.on('data',(temp) => {
    //console.log(id);
    console.log(temp);
    //connection.query(`INSERT INTO test2 (valor) VALUES (${temp})`);
    //let today = new Date();
    io.emit('temp',temp);
    /*io.sockets.emit(
        'temp', {
            date: today.getDate()+"-"+today.getMonth()+1+"-"+today.getFullYear(),
            time: (today.getHours())+":"+(today.getMinutes()),
            temp: temp});
            //
            
});
*/

/*
const connection = dataBase.createConnection({
    host: 'localhost',
    user: 'root',
    password: '107005205',
    database: 'Sensores'
});
*/
/*
connection.connect((error)=>{
    if (error){
        console.log("Error: "+error);
    } else {
        console.log("Conexion exitosa a la BD");
    }
})
*/





//app.use(express.static(__dirname +'/public'));
/*
connection.end((err)=>{
    console.log("conexion cerrada");
})*/