const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

let road = new Image()
road.src = "images/road.png"

document.getElementById('start-button').onclick = () => {
  ctx.drawImage(road, 0, 0, canvas.width, canvas.height);
}