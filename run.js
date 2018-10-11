window.resizeTo(100,100);

var canvas = document.createElement("canvas");
canvas.setAttribute("width", window.innerWidth);
canvas.setAttribute("height", window.innerHeight);
canvas.setAttribute("style", "position: absolute; x:0; y:0;");
document.body.appendChild(canvas);

//Then you can draw a point at (10,10) like this:

var ctx = canvas.getContext("2d");
var x_size = 10;
var y_size = 10;
var particleArray = [];

class Particle {

  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  fall(){
  	this.y  = this.y + 1;
  }
  drawParticle(){
    ctx.fillRect(this.x,this.y,x_size,y_size);
  }
}

let p1 = new Particle(10,10);
let p2 = new Particle(100,20);
//p1.drawParticle();

function refreshCanvas(particle){
  setInterval(function(){
  ctx.clearRect(particle.x, particle.y - 1, x_size, y_size);
  particle.fall();
  particle.drawParticle();},5);
  console.log(particle.y)
}

particleArray.push(p1);
//particleArray.push(p2);

function main(){

  for(i = 0; i < particleArray.length; i++){
    refreshCanvas(particleArray[i])
    }
  }

main();



  


	//every second,
	//generate particle at random x value
	//add particle to array
	//check that each particle has a value above minimum threshold
	//remove the ones that are below from the array
