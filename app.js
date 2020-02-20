document.addEventListener("DOMContentLoaded",e=>{
    document.addEventListener("submit",event=>{
        event.preventDefault();
        let $resp = document.querySelector("#lblSaludo"),
            nombre = document.querySelector("#txtNombre").value;
        $resp.innerHTML = 'Iniciando Peticion al server...';

        fetch(`saludo.php?nombre=${nombre}`).then(resp=>resp.text()).then(resp=>{
            //$resp.innerHTML = `Hola ${nombre} ${resp}`;
            $resp.innerHTML = resp;
        });
    });
});