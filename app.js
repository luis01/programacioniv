document.addEventListener("DOMContentLoaded",e=>{
    document.addEventListener("submit",event=>{
        event.preventDefault();

        let de = document.querySelector("#cboDe").value,
            a = document.querySelector("#cboA").value,
            cantidad = document.querySelector("#txtCantidadConversores").value,
            $res = document.querySelector("#lblRespuesta");
        let monedas={
            'dolar':1,
            'euro':0.92,
            'quetzal':7.63,
            'lempira':24.86,
            'cordoba':34.20
        };
        $res.innerHTML = `Respuesta: ${ monedas[a] / monedas[de] * cantidad }`;
    });
});