const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');
const aside = document.querySelector('#aside-visible');


openMenu.addEventListener('click', ()=>{
    aside.classList.add('aside-visible');
})

closeMenu.addEventListener('click', ()=>{
    aside.classList.remove('aside-visible');
})

//traemos a botones categorias del otro archivo js

botonesCategorias.forEach(boton=>{
    boton.addEventListener('click', ()=>{
        aside.classList.remove('aside-visible')
    } )
} );