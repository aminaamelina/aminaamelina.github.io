function setup() {
createCanvas(480, 480);
}

function draw() {
background(126, 117, 255);


//4drawing
push();
noStroke();
fill(117, 177, 255, 120)
for (var y = -30; y <= height; y += 15) {
for (var x = -480; x <= width; x += 15) {
square(x + y, y, 16 - y/13.0);
}
}
pop();


//1drawing
  push(); 
  strokeWeight(2);
for (var i = 20; i < 400; i += 20) {
line(i, 40, i + i/8, 270);
}
pop();


//2drawing
push();
  noStroke();
for (var y = 0; y < height+45; y += 40) {
fill(255, 140);
ellipse(0, y, 40, 40);
}
for (var x = 0; x < width+45; x += 40) {
fill(255, 140);
ellipse(x, 0, 40, 40);
}
pop();

//3drawing
push();
  noStroke();
for (var y = 0; y < height+45; y += 40) {
fill(255, 140);
ellipse(480, y, 40, 40);
}
for (var x = 0; x < width+45; x += 40) {
fill(255, 140);
ellipse(x, 480, 40, 40);
}
pop();
}
