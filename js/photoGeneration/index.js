export const imgWrapper = document.createElement('div')
imgWrapper.style.padding = '0 40px'
imgWrapper.style.margin = '300px 0 0 0'


// for (let i = 0; i < 12; i++) {
//     let img = document.createElement('img')
//     imgWrapper.appendChild(img)
//     img.src = `https://source.unsplash.com/collection/${i}/300x300`
//     img.style.width = '25%'
//     img.style.padding = '3px'
//     img.style.boxSizing = 'border-box'
// }


export const time = document.createElement('ul')

time.style.display = 'flex'
time.style.justifyContent = 'center'
time.style.alignItems = 'center'
time.style.fontSize = '48px'
time.style.listStyle = 'none'

const daysHTML = document.createElement('li')
const hoursHTML = document.createElement('li')
const minutesHTML = document.createElement('li')
const secondsHTML = document.createElement('li')

daysHTML.style.margin = '0 10px'
hoursHTML.style.margin = '0 10px'
minutesHTML.style.margin = '0 10px'
secondsHTML.style.margin = '0 10px'
daysHTML.style.fontFamily = 'sans-serif'
hoursHTML.style.fontFamily = 'sans-serif'
minutesHTML.style.fontFamily = 'sans-serif'
secondsHTML.style.fontFamily = 'sans-serif'


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
    const hours = Math.floor(seconds / 3600) % 60
    const minutes = Math.floor(seconds / 60) % 60
    daysHTML.innerHTML = `${days} days`
    hoursHTML.innerHTML = `${hours} hours`
    minutesHTML.innerHTML = `${minutes} minutes`
    secondsHTML.innerHTML = `${totalSeconds} seconds`
}
countDown()
setInterval(countDown, 1000)

