let startGame = false;
let gameOver = false;
let value = "";
let ran = "";
let n = 13;
var boo = true;
let timer = 60;
let tick = 0;
let plyScore = 0;
let homeScreen = true;
var img;
var img2;
// define a variable for color
let textColor = "black";
// define a variable for the box
let boxColor = "white";
let bckgrnd;
let level = 1;
let s;

function preload() {
  
  bckgrnd = loadImage("hawkesbury-river-travel-photography-vin-images-004.jpg");
  soundFormats("mp3", "ogg");
  correct_sfx = loadSound("benYes.mp3");
  incorrect_sfx = loadSound("benNo.mp3");
  img = loadImage("boat.png");
  img2 = loadImage("flipped.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bckgrnd);
  escape();
  //define the color
  fill(textColor);
  if (homeScreen === true) {
    StartScreen();
  }

  if (startGame === true) {
    timage();
    // Print the random number
    
    time();
    fill(textColor);
    text("Press: " + ran, windowWidth / 3, 40);
    fill(boxColor);
    square(10, 10, 10);
    rect(windowWidth / 2 - 90, 20, 180, 100, 20);
    // how game ends
    if (plyScore <= -20) {
      startGame = false;
      gameOver = true;
      homeScreen = false;
    }
    Score();

    // this code should be part of the keyPressed function
  }
  if (gameOver === true) {
    game_over_screen();
  }
}

// if statement for type of image
function timage() {
  if (boxColor === "green") {
    image(img, windowWidth / 3, windowHeight / 3, 600, 600);
  } else if (boxColor === "red") {
    image(img2, windowWidth / 3, windowHeight / 3, 600, 600);
  }
}

//key pressed function which is the main back behind how game works
function keyPressed() {
  // keyCode = 13 is Enter
  if (keyCode == 13 && startGame == false) {
    console.log("Game start");
    startGame = true;
    ran = random([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    tick = 0;
    plyScore = 0;
    gameOver = false;
    homeScreen = false;
  } else if (startGame == true) {
    console.log("Random Number: " + ran);
    console.log("Key Pressed:" + keyCode);

    // if statement for key registration
    if (ran == 0) {
      n = 48;
    } else if (ran == 1) {
      n = 49;
    } else if (ran == 2) {
      n = 50;
    } else if (ran == 3) {
      n = 51;
    } else if (ran == 4) {
      n = 52;
    } else if (ran == 5) {
      n = 53;
    } else if (ran == 6) {
      n = 54;
    } else if (ran == 7) {
      n = 55;
    } else if (ran == 8) {
      n = 56;
    } else if (ran == 9) {
      n = 57;
    }
    //how color is inputed into the square
    if (keyCode == n) {
      boxColor = "green";
      ran = random([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
      plyScore += 10;
      correct_sfx.play();
    } else {
      boxColor = "red";
      plyScore -= 10;
      incorrect_sfx.play();
    }
  }
}

//timer function
function time() {
  textSize(32);
  fill("black");
  text("Time left: " + round(timer), windowWidth - 500, 40);
  ++tick;

  timer -= 1 / 60;
  console.log(timer);
  if (timer <= 0) {
    startGame = false;
    gameOver = true;
    homeScreen = false;
  }
}

//score function
function Score() {
  fill("black");
  textSize(32);
  text(plyScore, 70, 40);
}

//game over screen
function game_over_screen() {
  strokeWeight(4);
  stroke("white");
  fill("black");
  //timer = 60 this will make timer always 60 and not according to level
  textAlign(CENTER);
  text("Game Over", windowWidth / 2, 100);
  text("Your score was " + plyScore, windowWidth / 2 + 10, 150);
  if (plyScore <= -20) {
    text("You Scored too low", windowWidth / 2, 200);
  } else {
    text("Time's Up", windowWidth / 2, 200);
  }
  text(concat("Your Level: ", level), windowWidth / 2, 250)
  text("Press ENTER to restart", windowWidth / 2, 300);
  levels(plyScore); // bringing level here and not game start will not let the timer stuck at level value because when the game start it will always run the if statement in the game that makes the timer stuck
}

//Start screen
function StartScreen() {
  textSize(32);
  strokeWeight(4);
  stroke("white");
  fill("black");
  textAlign(CENTER);
  text("Press ENTER to Start Game", windowWidth / 2, 100);
  text("This Game Requires You to Click Numbered Keys", windowWidth / 2, 250);
}

//level function
function levels(x) {
  if (x >= 100 && x <= 200) {
    level = 2;
  } else if (x >= 200 && x <= 300) {
    level = 3;
  } else if (x >= 300 && x <= 400) {
    level = 4;
  } else if (x >= 400 && x <= 500) {
    level = 5;
  } else if (x >= 500 && x <= 600) {
    level = 6;
  } else if (x >= 600 && x <= 700) {
    level = 7;
  } else if (x <= 90) {
    level = 1;
  } else if (x >= 700 && x <= 800) {
    level = 8;
  } else if (x >= 800 && x <= 900) {
    level = 9;
  } else if (x >= 900 && x <= 1000) {
    level = 10;
  } else if (x >= 1000 && x <= 1050) {
    level = 11;
  } else if (x >= 1050 && x <= 1100) {
    level = 12;
  }

  if (level === 2) {
    timer = 55;
  } else if (level === 3) {
    timer = 50;
  } else if (level === 4) {
    timer = 45;
  } else if (level === 5) {
    timer = 40;
  } else if (level === 6) {
    timer = 35;
  } else if (level === 7) {
    timer = 30;
  } else if (level === 1){
    timer = 60;
  } else if (level === 8){
    timer = 25;
  } else if (level === 9){
    timer = 20;
  } else if (level === 10){
    timer = 15;
  } else if (level === 11){
    timer = 10;
  } else if (level === 12){
    timer = 5;
  } 
}

function escape(){
  if (keyCode === UP_ARROW){
    window.open('https://editor.p5js.org/knnguy11/full/q9dvJKhNh');
  }
}