var socket = process.env.PORT || 3000;

function setup() {
  createCanvas(400, 400);
  background(220);

  socket.on("info", spawn);
}
function spawn(data)
{
	fill(20,200,0);
	ellipse(data.x,data.y,10,10);

}

function draw() {
  
  fill(200,0,100);
	ellipse(mouseX,mouseY,10,10);
	
  socket.emit("info", {x:mouseX, y :mouseY});
}
