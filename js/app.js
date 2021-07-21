AOS.init();
const nav=document.getElementById('nav')
const boton=document.getElementById('boton')
let semaforo=true
boton.addEventListener("click",e=>{
    if(semaforo){
        boton.style.color="lightgreen"
        semaforo=false
    }else{
        boton.style.color="white"
        semaforo=true
    }
    nav.classList.toggle('menudos')
})
