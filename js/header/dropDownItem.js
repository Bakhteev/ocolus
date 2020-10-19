import { languages } from './const.js'
import dropDown from './styles/dropdown.js'
import { arrow } from './styles/dropDown.js'

for (var i = 0; i < languages.length; i++) {
    var dropDownItems = document.createElement('li')
    dropDownItems.style.textTransform = 'uppercase'
    dropDownItems.innerHTML = `${languages[i]}`
    dropDown.appendChild(dropDownItems)
    if ( i > 0 ) {
        dropDownItems.style.opacity = '0'
    }
}

dropDownItems.style.transform = 'translateY(-30px)'
dropDownItems.style.backgroundColor = '#fff'

dropDown.addEventListener('click', function () {
    if (dropDown.className == 'is-active') {
        dropDown.className = 'none'
        arrow.style.transform = 'rotate(90deg)'
        if ( i > 0 ) {
            dropDownItems.style.opacity = '0'
            dropDownItems.style.transform = 'translateY(-30px)'
        }
    }
    else {
        dropDownItems.style.opacity = '1'
        dropDown.className = 'is-active'
        dropDown.style.overflowY = 'visible'
        arrow.style.transform = 'rotate(-90deg)'
        dropDownItems.style.transform = 'translateY(0px)'
    }
    arrow.style.transition = '0.3s linear'
    dropDownItems.style.transition = '0.3s linear'
})


