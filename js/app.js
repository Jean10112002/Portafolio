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
 let = new Typed('.typed-cursor', {
    strings: [
        "Desarrollador Web"
    ],
    typeSpeed:60,
    backSpeed:60,
    loop:true
  });