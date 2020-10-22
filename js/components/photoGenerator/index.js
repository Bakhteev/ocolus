import { colorGray } from "../header/const.js"

export const imgWrapper = document.createElement('div')
imgWrapper.style.padding = '0 40px'
imgWrapper.style.boxSizing = 'border-box'
imgWrapper.style.margin = '100px 0 0 0'

for (let i = 0; i < 12; i++) {
  var img = document.createElement('img')
  img.src = `https://source.unsplash.com/collection/${i}/450x450`
  img.style.width = '25%'
  img.style.padding = '3px'
  img.style.boxSizing = 'border-box'
  imgWrapper.appendChild(img)
}

