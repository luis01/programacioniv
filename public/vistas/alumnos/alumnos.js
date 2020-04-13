
export function modulo(){
    $("#frm-alumnos").submit(function(e){
        e.preventDefault();
        e.stopPropagation();
        
        let alumnos = {
            accion    : $(this).data('accion'),
            idAlumno  : $(this).data('idalumno'),
            codigo    : $("#txtCodigoAlumno").val(),
            nombre    : $("#txtNombreAlumno").val(),
            direccion : $("#txtDireccionAlumno").val(),
            telefono  : $("#txtTelefonoAlumno").val()
        };
        fetch(`private/Modulos/alumnos/procesos.php?proceso=recibirDatos&alumno=${JSON.stringify(alumnos)}`).then( resp=>resp.json() ).then(resp=>{
            $("#respuestaAlumno").innerHTML = `
                <div class="alert alert-success" role="alert">
                    ${resp.msg}
                </div>
            `;
        });
    });
    $("#frm-alumnos").reset(function(e){
        $(this)
            .data('idalumno','')
            .data('accion','nuevo');
    });
}