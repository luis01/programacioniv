
function init(){
    var $ = el => {
        return el.match(/^#/) ? document.querySelector(el) : document.querySelectorAll(el);
    };
    var mostrarVista = $("[class*='mostrar']");
    mostrarVista.forEach(element => {
        element.addEventListener('click',e=>{
            e.stopPropagation();

            let modulo = e.srcElement.dataset.modulo,
                form   = e.srcElement.dataset.form;
            fetch(`public/vistas/${modulo}/${form}.html`).then( resp=>resp.text() ).then(resp=>{
                $(`#vistas-${form}`).innerHTML = resp;

                let btnCerrar = $(`#btn-close-${form}`);
                btnCerrar.addEventListener("click",event=>{
                    $(`#vistas-${form}`).innerHTML = "";
                });
                import(`../vistas/${modulo}/${form}.js`).then(module=>{
                    module.modulo();
                });
                init();
            });
        });
    });
}
init();
