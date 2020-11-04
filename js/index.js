const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

let road = new Image()
road.src = "images/road.png"
let carImg = new Image()
carImg.src = 'images/car.png'

let car = {
  x: 225,
  y: 600,
  w: 80,
  h: 100,
}

function drawCar() {
  ctx.drawImage(carImg, car.x, car.y, car.w, car.h)
}

window.onkeydown = function (e) {
  if (e.key === "ArrowLeft") {
    car.x -= 10;
  } else if (e.key === "ArrowRight") {
    car.x += 10;
  }

}

let obstacle = {
  x: Math.floor(Math.random() * canvas.width),
  y: 0,
  w: 50,
  h: 5,
}

function drawObstacle() {
  ctx.fillStyle = "red"
  ctx.fillRect(obstacle.x, obstacle.y, obstacle.w, obstacle.h);
}



function animate() {
  window.requestAnimationFrame(animate)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(road, 0, 0, canvas.width, canvas.height)
  drawCar()
  drawObstacle()
  obstacle.y += 2
}

document.getElementById('start-button').onclick = () => {
  animate()
}