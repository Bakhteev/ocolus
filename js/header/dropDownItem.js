import { dropDown, languages } from './const.js'

for (let i = 0; i < 2; i++) {
    let dropDownItems = document.createElement('li')
    dropDownItems.style.textTransform = 'uppercase'
    dropDownItems.innerHTML = `${languages[i]}`
    dropDown.appendChild(dropDownItems)
}