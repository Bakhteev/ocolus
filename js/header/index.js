import { container } from '../base.js'
import { dropDown, header } from './const.js'
import './dropDownItem.js'
import nav from './nav.js'

const headerRow = document.createElement('div');
headerRow.style.display = 'flex'
headerRow.style.justifyContent = 'space-around'

header.appendChild(container)
container.appendChild(headerRow)
headerRow.appendChild(dropDown)
headerRow.appendChild(nav)

export default header
