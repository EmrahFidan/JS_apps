const container = document.getElementById('container')
const colors = ["#e76f51","#264653","#f4a261","#2a9d8f","#a2d2ff","#e63946","#5e548e","#6a4c93","#1982c4","#8ac926","#f72585","#ffbc42","#140152","#ccc9dc"]
const SQUARES = 966

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
   const color = getRandomColor()
   element.style.background = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
   element.style.background = '#1d1d1d'
   element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}