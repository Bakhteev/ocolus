import { dropDown, span } from '../const.js'

export const arrow = span

dropDown.appendChild(span)
arrow.innerHTML = '>'
arrow.style.position = 'absolute'
arrow.style.right = '0'
arrow.style.transform = 'rotate(90deg)'

dropDown.style.listStyle = 'none'
dropDown.style.padding = '0 15px 0 0 '
dropDown.style.position = 'relative'
dropDown.style.height = '30px'
dropDown.style.overflow = 'hidden'
dropDown.style.textDecoration = 'none'
dropDown.style.color = '#7b7b7b'
dropDown.style.fontSize = '12px'
dropDown.style.letterSpacing = '2px'
dropDown.style.lineHeight = '30px'
dropDown.style.fontFamily = 'Poppins'
dropDown.style.textTransform = 'uppercase'
dropDown.style.cursor = 'pointer'
dropDown.style.maxWidth = '61px'

export default dropDown