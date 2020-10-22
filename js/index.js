import header from './components/header/index.js'
import { imgWrapper} from './components/photoGenerator/index.js'
import overlay from './components/preloader/index.js'


const root = document.getElementById('root')
root.appendChild(overlay)
root.appendChild(header)
root.appendChild(imgWrapper)
