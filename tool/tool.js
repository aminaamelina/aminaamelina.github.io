//note: use ctrl/Cmd + t to auto format your code (indentations)

var img;
//var img2;
//var img3;
var initials ='aa'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

let button; //https://p5js.org/reference/p5/createButton/

function preload() {
  // preload() runs once, it may make you wait
  //  img = loadImage('cat.png');  // cat.jpg needs to be next to this .js file
  // you can link to an image on your github account
  img = loadImage('blue.jpg');
  //  img2 = loadImage('https://arao-sjsu.github.io/images/round.png');
  //  img3 = loadImage('https://veryprofessional3d.github.io/images/rainbow.gif');
}

function setup() {
  createCanvas(600, 600);  // canvas size
  background(screenbg);   // use our background screen color

  button = createButton('clear canvas');
  button.position(500, 645);
  //call clear_print() when the button is pressed
  button.mousePressed(clear_print);

  button = createButton('save img');
  button.position(500, 620);
  //call clear_print() when the button is pressed
  button.mousePressed(saveme);
  
  button = createButton('help text');
  button.position(500, 670);
  //call clear_print() when the button is pressed
  button.mousePressed(helpText);
  
  //want to style your buttons?? https://editor.p5js.org/msboyles/sketches/Vdfl8pLCB_
  //use css - https://editor.p5js.org/kjhollen/sketches/58WL8zYu1
  
  helpText();
  
  
}

function draw() {

  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
  }
  if (mouseIsPressed) {
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of
  // graphic functionx

  if (toolChoice == '1' ) {  // first tool

    strokeWeight(04);
    stroke(128, 23, 23);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '2') { // second tool

    strokeWeight(20);
    stroke(255, 0, 89, 180);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '3') { // third tool

    strokeWeight(20)
    stroke(26, 44, 117, 80);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '4') {

    stroke(0, 0, 255);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (key == '5') { // this tool calls a function
    stroke(0, 0, 255);
    testbox(20, 20, 200);
    testbox(200, 20, 20);

    // make testbox do something!
    //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {

    stroke(200);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '7') {

    stroke(0);
    strokeWeight(1);
    fill(100, 200, 100);
    7
      rect(mouseX, mouseY, 20, 20);
  } else if (toolChoice == '8') {

    stroke(0);
    strokeWeight(1);
    fill(255, 100, 0, 80);
    rect(mouseX, mouseY, 20, 20);
  } else if (toolChoice == '9') {

    stroke(0, 38, 255);
    strokeWeight(1);
    fill(180, 100, 0, random(255));
    square(mouseX, mouseY, random(30, 50));
  } else if (toolChoice == '0') {

    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255)); //random RGBA colors
    //kisses!

    beginShape();
    vertex(mouseX, mouseY);
    bezierVertex(mouseX+10, mouseY-20, mouseX+15, mouseY-20, mouseX+20, mouseY-10);
    bezierVertex(mouseX+30, mouseY-20, mouseX+35, mouseY-20, mouseX+40, mouseY);
    bezierVertex(mouseX+30, mouseY+15, mouseX+10, mouseY+15, mouseX, mouseY);
    endShape();
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded

    image(img, mouseX, mouseY, mouseX/10, mouseX/16); //what does this do?
    //  } else if (toolChoice == 'h' || toolChoice == 'H') { // g places the image we pre-loaded
    //    image(img2, mouseX-25, mouseY-25, 50, 50,20);
    //  } else if (toolChoice == 'i' || toolChoice == 'I') { // g places the image we pre-loaded
    //    image(img3, mouseX-25, mouseY-25, 50, 50,20);
  } //else if (toolChoice == 'x' || key == 'X') {

  //clearflag = 1;

  //} 
  else if (key == 'p' || key == 'P') {

    saveme();  // call saveme which saves an image of the screen
  }

  function testbox(r, g, b) {
    // this is a test function that will show you how you can put your own functions into the sketch
    x = mouseX;
    y = mouseY;
    fill(r, g, b);
    rect(x-50, y-50, 100, 100);
  }
}

function clear_print() {
  // clears the screen by resetting the background
  background(screenbg); // set the screen back to the background color
}

function saveme() {
  //this will save the name as the intials, date, time and a millis counting number.
  // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
}

function keyPressed() { //https://p5js.org/reference/p5/keyPressed/
  if (key === 'x' || key === 'X') {
    clear_print();
  } else if (key === 'p' || key === 'P') {
    saveme();
  }
}

function helpText(){
  fill("black");
  strokeWeight(0.2);
  textSize(15);
  text('press numerical keys from 1 - 0 for different strokes', 60, 30);
  text('use buttons to save or clear canvas, or press x or p', 60, 45);
  text('try g for secret bonus', 60, 60);
  
}
