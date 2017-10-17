window.onload = init;
var canvas;
var ctx;
var movers;
var orbiter;
function init(){
  canvas = document.getElementById('cnv')
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid red 3px';
  canvas.style.backgroundColor = randomColor();
  ctx = canvas.getContext('2d');

  loadMovers(1);
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,canvas.width, canvas.height);
for(i=0;i < movers.size; i++){
    movers[i].update();
  }
    orbiter.update();

}

function loadMovers(numMovers){
        var radius = Math.random() * 30 + 15;
        var x = Math.random() * (window.innerWidth - radius*2) + radius;
        var y = Math.random() * (window.innerHeight - radius*2) + radius;
        var dx = Math.random() * 10 + 1;
        var dy = Math.random() * 10 + 1;

        var loc = new JSVector(x, y);
        var vel = new JSVector(dx, dy);
        var acc = new JSVector(0,0);
        ctx.strokeStyle = randomColor();
        ctx.fillStyle = randomColor();
          movers.push(new Mover(loc, vel, acc, radius, randomColor()));
        //movers.push(new Mover(new JSVector(loc.x + 40, loc.y + 40),loc, vel, acc, radius, randomColor()));
        //movers.push(new Mover(new JSVector(loc.x + 60, loc.y + 60), vel, acc, radius, randomColor()));
        //movers.push(new Mover(new JSVector(loc.x + 80, loc.y + 80), vel, acc, radius, randomColor()));
        //movers.push(new Mover(new JSVector(loc.x + 100, loc.y + 100), vel, acc, radius, randomColor()));
        //orbiter = new Orbiter(loc, vel, randomColor(),movers[0], radius);

}

function randomColor(){
  var r = Math.random() * 255|50;
  var g = Math.random() * 255|50;
  var b = Math.random() * 255|50;
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

//setInterval(loadMover, 6000);
