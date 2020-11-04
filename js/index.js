const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

let road = new Image()
road.src = "images/road.png"
let car = new Image()
car.src = 'images/car.png'

document.getElementById('start-button').onclick = () => {
  ctx.drawImage(road, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(car, canvas.width / 2.4, canvas.height - 150, canvas.width * .15, canvas.height * .2)
}