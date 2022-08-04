const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault(); 
        const nav = document.querySelector('.nav-cabecalho');    
        nav.classList.toggle('active'); 
        const active = nav.classList.contains('active'); 
        
        event.currentTarget.setAttribute('aria-expanded', 'active');
        if (active) {
            event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
        }
        else {
            event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
        } 
    
}

function moveTo() {           
    banner.classList.toggle('active');     
}

btnMobile.addEventListener('click', toggleMenu,);
btnMobile.addEventListener('touchstart', toggleMenu,);
btnMobile.addEventListener('click', moveTo,);
btnMobile.addEventListener('touchstart', moveTo,);


//Lembrete para analise =>

/* 
function moveTo() {                  
    let y = 0;    
    y = y +140;
    banner.style.marginTop=y+"px";
}             
*/