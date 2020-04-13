export function modulo(){
    $("#frm-docentes").submit(function(e){
        e.preventDefault();
        e.stopPropagation();
        
        let docentes = {
            accion    : $(this).data('accion'),
            idDocente  : $(this).data('iddocente'),
            codigo    : $("#txtCodigoDocente").val(),
            nombre    : $("#txtNombreDocente").val(),
            direccion : $("#txtDireccionDocente").val(),
            telefono  : $("#txtTelefonoDocente").val(),
            dui       : $("#txtDuiDocente").val(),
            nit       : $("#txtNitDocente").val()
        };
        fetch(`private/Modulos/docentes/procesos.php?proceso=recibirDatos&docente=${JSON.stringify(docentes)}`).then( resp=>resp.json() ).then(resp=>{
            $("#respuestaDocente").html(`
                <div class="alert alert-success" role="alert">
                    ${resp.msg}
                </div>
            `);
        });
    });
    $("#frm-docentes").reset(function(e){
        $(this)
            .data('iddocente','')
            .data('accion','nuevo');
    });
}