const express = require('express');
const https = require('https');
const http = require('http');
const app = express();
const fs = require('fs');
const SerialPort = require('serialport');



var options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

/*app.get('/',(req,res)=>{
    res.send('Hola https');
});*/

 

http.createServer(app).listen(8080,()=>{
    console.log('HTTP escuchando por el puero 8080');
});
var server = https.createServer(options,app).listen(443,()=>{
    console.log('HTTPS escuchando por el puerto 443')
}); 

const io = require('socket.io')(server);
app.use(express.static('public'));

io.on('connection',()=>{
    console.log("Cliente conectado");
})

//const ReadLine = require('@serialport/parser-readline')
//const ReadLine = SerialPort.parsers.Readline;
//const port = new SerialPort("/dev/ttyUSB0");
//const parser = new ReadLine({delimiter: '\r\n'});
//port.pipe(parser);
/*
parser.on('data',temp => {
    io.emit('temp',temp);
})
*/