var socket = io();
socket.on('connect', function(){
    console.log('Correndo los cambios al servidor');
});
// on escuchar
socket.on('disconnect', function(){
    console.log('Se ha perdido la conexión ');
});
//Enviar información 
socket.emit('enviarMensaje', {
    usuario: 'fernando',
    mensaje: 'hola mundo'
}, function( resp ){
    console.log('Respuesta server: ', resp);
});

socket.on('enviarMensaje', (message) => {
    console.log(message);
});