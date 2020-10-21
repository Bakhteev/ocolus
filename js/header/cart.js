import { div, cartPrice, colorGray } from './const.js'

const Cart = div
Cart.className = 'cart'

for(let i = 0; i < 2; i++) {
    let cartItem = document.createElement('span')
    cartItem.innerHTML = `${cartPrice[i]}`
    cartItem.style.listStyle = 'none'
    cartItem.style.padding = '0 15px 0 0 '
    cartItem.style.position = 'relative'
    cartItem.style.height = '30px'
    cartItem.style.overflow = 'hidden'
    cartItem.style.textDecoration = 'none'
    cartItem.style.color = colorGray
    cartItem.style.fontSize = '12px'
    cartItem.style.letterSpacing = '2px'
    cartItem.style.lineHeight = '30px'
    cartItem.style.fontFamily = 'Poppins'
    cartItem.style.textTransform = 'uppercase'
    
    Cart.appendChild(cartItem)
}

export default Cart 