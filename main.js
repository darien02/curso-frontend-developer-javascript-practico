//variavles del menu toogle desktop
const menuClickDesktop = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
//variables para ham menu mobile
const botonMenuHam = document.querySelector('.menu')
const menuMobile = document.querySelector('.mobile-menu')
//variables carrito
const menuCarrito = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

//evento toggle menu email
menuClickDesktop.addEventListener('click', toggleDesktopMenu)
//evento toggle menu ham mobile
botonMenuHam.addEventListener('click',toggleMobileMenu)
//evento toggle carrito aside
menuCarrito.addEventListener('click', togglecarrito)

function toggleDesktopMenu(){
    isAsideMenuClosed = aside.classList.contains('inactive')
    if(!isAsideMenuClosed){
        aside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')

}

function toggleMobileMenu() {
    isAsideMenuClosed = aside.classList.contains('inactive')
    if(!isAsideMenuClosed){
        aside.classList.add('inactive')
    }
    menuMobile.classList.toggle('inactive')
}
function togglecarrito() {
    const ismenuMobileClosed = menuMobile.classList.contains('inactive')
        
    if(!ismenuMobileClosed){
        menuMobile.classList.add('inactive')
    }
    aside.classList.toggle('inactive')
    
}