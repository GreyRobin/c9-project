var btn_red;
var btn_green;

var r = 255;
var g = 255;
var b = 0;

function setup() {
  createCanvas(400, 400);  
  btn_red = createButton("red")
  btn_red.position = 100,200
  btn_red.mousePressed(red_bg)
  btn_green = createButton("green")
  btn_green.position = 300,200
  btn_green.mousePressed(green_bg)
}

function draw() {
  background(r,g,b);
}

function red_bg(){
  r=255
  g=0
  background(r,g,b)
}
function green_bg(){
  r=0
  g=255
  background(r,g,b)
}