window.onload = function(){

    const intro = document.getElementById("inicio");
    const content = document.getElementById("content");

    setTimeout(()=>{
        intro.classList.add("efeito-out");

        setTimeout(()=>{
            intro.style.display = "none";

            if(content){
                content.classList.remove("hidden");
                content.classList.add("efeito-in");
            }

        },1000);

    },3000);
}

function trocar(cor){
    document.body.style.background = cor;
}

// MENU HAMBURGUER
document.addEventListener('DOMContentLoaded',()=>{

    const menuIcone = document.getElementById("menu-icone");
    const navMenu = document.querySelector("nav");

    if(menuIcone && navMenu){

        menuIcone.onclick = ()=>{

            navMenu.classList.toggle('active');
            menuIcone.classList.toggle('open');
        }
    }
});