//let showNum = false;
let startGame = false;
let value = '';
let ran = '';
let n = 13;
var boo = true;

// define a variable for color
let textColor = 'black';

// define a variable for the box
let boxColor = 'white';

let bckgrnd;

function preload() {
  bckgrnd = loadImage('hawkesbury-river-travel-photography-vin-images-004.jpg');
}

function setup() {
  //createCanvas(1920, 1080);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bckgrnd);
  rect(900, 20, 180, 100, 20);
  //spim();
  textSize(30);
  //define the color 
  fill(textColor);
  console.log(n);
  // You can move this code to the KeyPressed function
  // keyCode = 13 --> Enter
  
  if ((startGame == true) && (boo == true)){
    //} You want to include the lines below inside this if  
  
    // Print the random number
    fill(textColor);
    text(ran, 500, 45); 
    fill(boxColor);
    square(10,10,10);
    // this code should be part of the keyPressed function 
    }
  }  
  


function keyPressed(){
  //boo = false;
  
  // keyCode = 13 is Enter
  if ((keyCode == 13) && (startGame == false)) {
    console.log("Game start");
    startGame = true; 
    ran = random([0,1,2,3,4,5,6,7,8,9]);
  }
  
  else if (/*(keyCode == n) &&*/ (startGame == true) /*&& (boo == true)*/){
    
    console.log("Random Number: " + ran);
    console.log("Key Pressed:" + keyCode);
    
    // you can change this to a case statement
    if((ran == 0)){
      n = 48; 
    }else if (ran == 1){
       n = 49;
    }else if (ran == 2){
       n = 50;
    } else if (ran == 3){
       n = 51;
    } else if (ran == 4){
       n = 52;
    } else if (ran == 5){
       n = 53;
    } else if (ran == 6){
       n = 54;
    } else if (ran == 7){
       n = 55;
    } else if (ran == 8){
       n = 56;
    } else if (ran == 9){
       n = 57;
   }
    //You want to compare the random number with the keyPressed
    if (keyCode == n){
      boxColor = 'green';
      ran = random([0,1,2,3,4,5,6,7,8,9]);

    }
    else {
      boxColor = 'red';
      // ran = random([0,1,2,3,4,5,6,7,8,9]);
      
    }
    
    }
  //return boo; you don't need to return anything in this function
}
function time() {
  fill(250,250,250);
  textSize(32)
  text (timer, windowWidth - 250, 40)
  ++tick;
  if (tick % 60 == 0){
    --timer
  }
  if (tick >= 3000)
    res_timer_check = 50;
  if (tick >= 3600) {
    lost_sfx.play();
    RESULT_TYPE = "TIME'S UP"
    GAME_START = false;
    GAME_HOME = false
    GAME_RESULT = true
  }
}