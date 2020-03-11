

document.addEventListener("DOMContentLoaded",event=>{
    let mostrarVista = document.querySelector("[class*='mostrar']");
    mostrarVista.addEventListener('click',e=>{
        e.preventDefault();
        e.stopPropagation();

        let modulo = e.toElement.dataset.modulo;
        
    });
});