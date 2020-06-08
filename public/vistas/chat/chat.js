/**
 * @author Luis Hernandez <luishernandez@ugb.edu.sv>
 * @file chat.js logica para el chat de comunicacion entre los usuarios.
 * @license MIT libre distribucion y modificacion para fine educativos.
 * @instance objeto de instancia de vue.js
 */
var appchat = new Vue({
    /**
     * @property el element del DOM a enlazar.
     */
        el:'#frm-chat',
        data:{
            msg : '',
            msgs : []
        },
        methods:{
            /**
             * @function enviarMensaje es cuando el usuario envia un mensaje a otro usuario.
             */
            enviarMensaje(){
                socket.emit('enviarMensaje', this.msg);
                this.msg = '';
            },
            /**
             * @function limpiarChat borra el texto que eecribio el usuario en la caja de texto
             */
            limpiarChat(){
                this.msg = '';
            }
        },
        created(){
            socket.emit('chatHistory');
        }
    });
    socket.on('recibirMensaje',msg=>{
        console.log(msg);
        $.notification("Enviando noficacion",msg, 'https://www.tuexpertoapps.com/wp-content/uploads/2018/06/mensajes-android-950x675.jpg.webp');
        appchat.msgs.push(msg);
    });
    socket.on('chatHistory',msgs=>{
        appchat.msgs = [];
        msgs.forEach(item => {
            appchat.msgs.push(item.msg);
        });
    });
