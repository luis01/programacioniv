var appalumnos = new Vue({
    el:'#frm-alumnos',
    data:{
        alumno:{
            idAlumno : 0,
            accion    : 'nuevo',
            codigo    : '',
            nombre    : '',
            direccion : '',
            telefono  : '',
            msg       : ''
        }
    },
    methods:{
        guardarAlumnos(){
            fetch(`private/Modulos/alumnos/procesos.php?proceso=recibirDatos&alumno=${JSON.stringify(this.alumno)}`).then( resp=>resp.json() ).then(resp=>{
                this.alumno.msg = resp.msg;
            });
        },
        limpiarAlumnos(){
            this.alumno.idAlumno=0;
            this.alumno.accion="nuevo";
            this.alumno.codigo="";
            this.alumno.nombre="";
            this.alumno.direccion="";
            this.alumno.telefono="";
            this.alumno.msg="";
        }
    }
});