function init(){
    $("[class*='mostrar']").off("click").click(function(){
        let modulo = $(this).data('modulo'),
            form   = $(this).data('form');
        fetch(`public/vistas/${modulo}/${form}.html`).then( resp=>resp.text() ).then(resp=>{
            $(`#vistas-${form}`).html(resp).draggable();

            $(`#btn-close-${form}`).click(()=>{
                $(`#vistas-${form}`).html("");
            });
            import(`../vistas/${modulo}/${form}.js`).then(module=>{
                module.modulo();
            });
            init();
        });
    });
}
init();
