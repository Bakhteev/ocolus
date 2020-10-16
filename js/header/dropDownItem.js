import { languages } from './const.js'
import dropDown from './styles/dropdown.js'

for (let i = 0; i < languages.length; i++) {
    let dropDownItems = document.createElement('li')
    dropDownItems.style.textTransform = 'uppercase'
    dropDownItems.innerHTML = `${languages[i]}`
    dropDownItems[i + 1].style.display = 'none'
    dropDown.appendChild(dropDownItems)
    dropDown.addEventListener('click', function() {
        
    })
}