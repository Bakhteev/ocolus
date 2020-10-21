import { colorGray } from '../header/const.js'

export const imgWrapper = document.createElement('div')
imgWrapper.style.padding = '0 40px'
imgWrapper.style.margin = '150px 0 0 0'


for (let i = 0; i < 12; i++) {
    let img = document.createElement('img')
    imgWrapper.appendChild(img)
    img.src = `https://source.unsplash.com/collection/${i}/300x300`
    img.style.width = '25%'
    img.style.padding = '3px'
    img.style.boxSizing = 'border-box'
}


export const time = document.createElement('ul')

time.style.display = 'flex'
time.style.fontSize = '20px'
time.style.listStyle = 'none'
time.style.color = colorGray
time.style.position = 'fixed'
time.style.backgroundColor = '#fff'
time.style.left = '105px'
time.style.top = '-6px'

const daysHTML = document.createElement('li')
const hoursHTML = document.createElement('li')
const minutesHTML = document.createElement('li')
const secondsHTML = document.createElement('li')

daysHTML.style.margin = '0 10px'
hoursHTML.style.margin = '0 10px'
minutesHTML.style.margin = '0 10px'
secondsHTML.style.margin = '0 10px'
daysHTML.style.fontFamily = 'Poppins'
hoursHTML.style.fontFamily = 'Poppins'
minutesHTML.style.fontFamily = 'Poppins'
secondsHTML.style.fontFamily = 'Poppins'


time.appendChild(daysHTML)
time.appendChild(hoursHTML)
time.appendChild(minutesHTML)
time.appendChild(secondsHTML)

export const newYears = '1 Jan 2021'

function countDown() {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()
    const seconds = Math.floor((newYearsDate - currentDate) / 1000)

    const totalSeconds = Math.floor(seconds % 60)
    const days = Math.floor(seconds / 3600 / 24)
    const hours = Math.floor(seconds / 3600) % 24
    const minutes = Math.floor(seconds / 60) % 60
    daysHTML.innerHTML = `${days} :`
    hoursHTML.innerHTML = `${hours < 10 ? `0${hours}` : hours } :`
    minutesHTML.innerHTML = `${minutes} :`
    secondsHTML.innerHTML = `${totalSeconds < 10 ? `0${totalSeconds}` : totalSeconds }`
}
countDown()
setInterval(countDown, 1000)

