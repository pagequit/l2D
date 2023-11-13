/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
document.body.style.margin = "0";

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
canvas.style.display = "block";

const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

let now = Date.now();
let then = Date.now();

(function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  then = now;
  now = Date.now();
  const delta = now - then;
  ctx.fillText("FPS: " + Math.round(1000 / delta), 10, 10);
  requestAnimationFrame(animate);
})();
