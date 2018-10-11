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

class particle {

  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.a = a;
    this.b = b;
  }

  fall(){
  	this.y  = this.y + 1;
  }
}

let user = new User("John");
user.sayHi();
function grow(input){
	var output;
	if (input == 99) {
		output = 0;
	}
	else {
		output = input + 1;
	}
	return (output);
}


while(){
	var particle_array = []
	//every second,
	//generate particle at random x value
	//add particle to array
	//check that each particle has a value above minimum threshold
	//remove the ones that are below from the array

}