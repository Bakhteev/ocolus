import { nav, ul, li, navItems } from './const.js'

nav.appendChild(ul)

for (let i = 0; i < 6; i++) {
    let li2 = document.createElement('li')
    ul.appendChild(li2)
    li2.innerHTML = `${navItems[i]}`
}

export default nav