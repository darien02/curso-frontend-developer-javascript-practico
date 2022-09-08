//variavles del menu toogle desktop
const menuClickDesktop = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
//variables para ham menu mobile
const botonMenuHam = document.querySelector('.menu')
const menuMobile = document.querySelector('.mobile-menu')
//variables carrito
const menuCarrito = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')
//selecionar div de producto 
const cardsContainer = document.querySelector('.cards-container')

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

const productList =[]
    productList.push({
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

    })
    productList.push({
        name: 'perro',
        price: 150,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        
    })
    productList.push({
        name: 'gato',
        price: 130,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        
    })
    
    function renderProduct(arr) {
        for (producto of productList){

            const productCard = document.createElement('div')
            productCard.classList.add('product-card')
    
            const productImg = document.createElement('img')
            productImg.setAttribute('src', producto.image)
    
            const productInfo = document.createElement('div')
            productInfo.classList.add('product-info')
    
            const productInfoDiv = document.createElement('div')
    
            const productPrice = document.createElement('p')
            productPrice.innerText ='$'+producto.price
            const productName = document.createElement('p')
            productName.innerText = producto.name
    
            productInfoDiv.appendChild(productPrice)
            productInfoDiv.appendChild(productName)
    
    
            const productInfoFigure = document.createElement('figure');
            const productImgCart = document.createElement('img');
            productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
            productInfoFigure.appendChild(productImgCart)
    
            productInfo.appendChild(productInfoDiv)
            productInfo.appendChild(productInfoFigure)
    
            productCard.appendChild(productImg)
            productCard.appendChild(productInfo)
    
            cardsContainer.appendChild(productCard)
    
    
    
    
    
    
    
    
    
        } 
    }
    renderProduct(productList)