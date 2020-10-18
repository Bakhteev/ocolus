import { languages } from './const.js'
import dropDown from './styles/dropdown.js'
import { arrow } from './styles/dropDown.js'

for (var i = 0; i < languages.length; i++) {
    var dropDownItems = document.createElement('li')
    dropDownItems.style.textTransform = 'uppercase'
    dropDownItems.innerHTML = `${languages[i]}`
    dropDown.appendChild(dropDownItems)
    if ( i > 0) {
        dropDownItems.style.display = 'none'
    }
}

dropDown.addEventListener('click', function () {
    if (dropDown.className == 'is-active') {
        dropDown.className = 'none'
        arrow.style.transform = 'rotate(90deg)'
        if ( i > 0 ) {
            dropDownItems.style.display = 'none'
        }
    }
    else {
        dropDownItems.style.display = 'block'
        dropDown.className = 'is-active'
        dropDown.style.overflow = 'visible'
        arrow.style.transform = 'rotate(-90deg)'
    }
    dropDown.style.bottom = '0'
    dropDown.style.display = 'block'
    dropDown.style.backgroundColor = 'transparent'
    arrow.style.transition = '0.3s linear'
})