var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
}

function draw() {
  if (gameState == "L1") {
    background(0, 255, 200);
    levelOne();
  } else if (gameState == "L2") {
    background(0, 255, 144);
    levelTwo();
  } else if (gameState == "L3") {
    background(0, 214, 121);
    levelThree();
  } else if (gameState == "L4") {
    background(0, 181, 102);
    levelFour();
  } else if (gameState == "L5") {
    background(0, 130, 73);
    levelFive();
  } else if (gameState == "WIN") {
    background(0, 89, 50);
    text("You win!", width / 2, height / 2);
  }

  text("Score: " + score, width / 2, 40);
}

function levelOne() {
  text("Level 1", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);

  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }

  if (score > 5) {
    gameState = "L2";
  }

  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize);
}

function levelTwo() {
  text("Level 2", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);

  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }

  if (score > 10) {
    gameState = "L3";
  }

  ellipse(ballx, bally, ballSize);
}

function levelThree() {
  text("Level 3", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);

  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }

  if (score > 15) {
    gameState = "L4";
  }

  ellipse(ballx, bally, ballSize);
}

function levelFour() {
  text("Level 4", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);

  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }

  if (score > 20) {
    gameState = "L5";
  }

  ellipse(ballx, bally, ballSize);
}

function levelFive() {
  text("Level 5", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);

  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }

  if (score > 30) {
    gameState = "WIN";
  }

  ellipse(ballx, bally, ballSize);
}
