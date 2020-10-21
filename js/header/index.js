import { container } from '../base.js'
import { dropDown, header } from './const.js'
import './dropDownItem.js'
import nav from './nav.js'
import Cart from './cart.js'
import burgerMenu from './burger.js'

const headerRow = document.createElement('div');
const headerBottom = document.createElement('div')

headerRow.style.border = '1px solid #eeeeee'

headerBottom.className = 'burger-bottom'


headerRow.style.display = 'flex'
headerRow.style.justifyContent = 'space-between'
headerRow.style.alignItems = 'center'
headerRow.style.maxHeight = '50px'

header.appendChild(headerRow)
header.appendChild(headerBottom)
headerRow.appendChild(container)
container.appendChild(dropDown)
container.appendChild(nav)
container.appendChild(Cart)


export default header
