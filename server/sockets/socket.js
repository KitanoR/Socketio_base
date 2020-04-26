
const { io } = require('../server');

io.on('connection', (client) => {
    console.log('usuario conectado');
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })
    //EScuchar el cliente
    client.on('enviarMensaje', (message, callback) => {
        // console.log(message);
        // if(!callback) return;
        // if(message.usuario){
        //     callback({
        //         res: 'Todo salió bien'
        //     });
        // }else {
        //     callback({
        //         resp: 'Todo salio mal'
        //     })
        // }
        client.broadcast.emit('enviarMensaje', message);
    });
    client.emit('enviarMensaje', {
        mensaje: 'Mensaje backend',
        usuario: 'Admin'
    });
});