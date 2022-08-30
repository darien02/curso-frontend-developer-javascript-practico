
const menuClickDesktop = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

menuClickDesktop.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu(){
desktopMenu.classList.toggle('inactive')

}
