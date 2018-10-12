window.resizeTo(100,100);

var canvas = document.createElement("canvas");
canvas.setAttribute("width", window.innerWidth);
canvas.setAttribute("height", window.innerHeight);
canvas.setAttribute("style", "position: absolute; x:0; y:0;");
document.body.appendChild(canvas);

//Then you can draw a point at (10,10) like this:

var ctx = canvas.getContext("2d");

//Temporary setting for test
 var my_gradient=ctx.createLinearGradient(0,0,0,170);
my_gradient.addColorStop(0,"white");
my_gradient.addColorStop(1,"blue");
ctx.fillStyle=my_gradient;

var x_size = 1;
var y_size = 2;
var particleArray = [];
var max_height = 1000;
var cloud_bottom = 10;
var max_width = 2000;

class Particle {

  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  fall(){
    if (this.y < max_height){this.y++}
    else {
      this.y = 0;
      this.x = getRandomInt(max_width)
    }

  }
  drawParticle(){
    ctx.fillRect(this.x,this.y,x_size,y_size);
  }
}

let p1 = new Particle(10,10);
let p2 = new Particle(100,20);
//p1.drawParticle();

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function refreshCanvas(particle,speed){
  setInterval(function(){
    ctx.clearRect(particle.x, particle.y - 1, x_size, y_size);
    particle.fall();
    particle.drawParticle();},speed);
}

particleArray.push(p1);
particleArray.push(p2);

function populateArray(array){
  var long = getRandomInt(max_width);
  var lat = getRandomInt(max_height);
  let entry = new Particle(long,lat);
  particleArray.push(entry);
}

function main(){

  var count = 0;
  while(count < 1000){
    populateArray(particleArray)
    console.log(particleArray)
    count++
  }

  for(i = 0; i < particleArray.length; i++){
    _speed = Math.random() * 100;
    refreshCanvas(particleArray[i],_speed)
    }
  }

main();



  


	//every second,
	//generate particle at random x value
	//add particle to array
	//check that each particle has a value above minimum threshold
	//remove the ones that are below from the array
