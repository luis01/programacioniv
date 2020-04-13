var appmaterias;
export function modulo(){
    appmaterias = new Vue({
        el:'#frm-materias',
        data:{
            materia:{
                idMateria : 0,
                accion    : 'nuevo',
                codigo    : '',
                nombre    : '',
                msg       : ''
            }
        },
        methods:{
            guardarMaterias:function(){
                fetch(`private/Modulos/materias/procesos.php?proceso=recibirDatos&materia=${JSON.stringify(this.materia)}`).then( resp=>resp.json() ).then(resp=>{
                    this.materia.msg = resp.msg;
                });
            }
        }
    });
}