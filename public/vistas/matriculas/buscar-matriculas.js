var appbuscar_matriculas = new Vue({
    el: '#frm-buscar-matriculas',
    data:{
        mis_matriculas:[],
        valor:''
    },
    methods:{
        buscarMatriculas: function(){
            fetch(`private/Modulos/matriculas/procesos.php?proceso=buscarMatricula&matricula=${this.valor}`).then( resp=>resp.json() ).then(resp=>{ 
                this.mis_matriculas = resp;
            });
        },
        modificarMatricula:function(matricula){
            appmatriculas.matricula = matricula;
            appmatriculas.matricula.accion = 'modificar';
        },
        eliminarMatricula:function(idMatricula){
            fetch(`private/Modulos/matriculas/procesos.php?proceso=eliminarMatricula&matricula=${idMatricula}`).then( resp=>resp.json() ).then(resp=>{
                this.buscarMatriculas();
            });
        }
    },
    created:function(){
        this.buscarMatriculas();
    }
});