var http = require('http').Server(),
    io   = require('socket.io')(http),
    MongoClient = require('mongodb').MongoClient,
    url  = 'mongodb://localhost:27017';
    
io.on('connection',socket=>{
    socket.on('enviarMensaje',msg=>{
        io.emit('recibirMensaje',msg);
    });
});

http.listen(3001,()=>{
    console.log('Escuchando peticiones por el puerto 3001, LISTO');
});