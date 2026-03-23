/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var BOARD_WIDTH = $("#board").width();
  var BOARD_HEIGHT = $("#board").height();
  
  // Game Item Objects
  function GameItem(id, x, y, speedX, speedY){
    var gameItem = {};
    gameItem.id = id;
    gameItem.x = x;
    gameItem.y = y;
    gameItem.speedX = speedX;
    gameItem.speedY = speedY;
    gameItem.width = $(id).width();
    gameItem.height = $(id).height();

    return gameItem;
}
  const KEY = {
  
    UP: 38,
    DOWN: 40,

    W: 87,
    S: 83
  



  }

  let leftPaddle = GameItem("#leftPaddle", 0,0,0,0)
  let rightPaddle = GameItem("#rightPaddle", BOARD_WIDTH - $("#rightPaddle").width(), BOARD_HEIGHT - $("#rightPaddle").height(), 0, 0)
  let ball = GameItem("#ball", BOARD_WIDTH / 2, BOARD_HEIGHT / 2, (Math.random() > 0.5 ? -3 : 3), (Math.random() > 0.5 ? -3 : 3))

  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
     
  
  // change 'eventType' to the type of event you want to handle
  $(document).on('keydown', handleKeyDown);    
  $(document).on('keyup', handleKeyUp); 
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    drawObject(rightPaddle);
    drawObject(leftPaddle);
    drawObject(ball);
    moveObject(ball);
    moveObject(rightPaddle);
    moveObject(leftPaddle);

  }
  
  /* 
  Called in response to events.
  */

  function handleKeyDown(event) {

    if (event.which === KEY.UP) {
      rightPaddle.speedY = -5;
      rightPaddle.speedX = 0;
      console.log("Up pressed")
    }else if(event.which === KEY.DOWN) {
      rightPaddle.speedY = 5
      rightPaddle.speedX = 0;
      console.log("Down pressed")
    }
    
    if(event.which === KEY.W){
      leftPaddle.speedY = -5;
      leftPaddle.speedX = 0;
      console.log("W pressed")
    }
    else if(event.which === KEY.S){
      leftPaddle.speedY = 5;
      leftPaddle.speedX = 0;
      console.log("s pressed")
    }

  }
//This function should contain everything that needs to be updated when we detect a "keyup" event.
function handleKeyUp(event){
  if(event.which === KEY.LEFT || event.which === KEY.RIGHT){
    rightPaddle.speedX = 0;
  }else if (event.which === KEY.UP || event.which === KEY.DOWN){
    rightPaddle.speedY = 0;
  }
  if(event.which === KEY.A || event.which === KEY.D){
    leftPaddle.speedX = 0;

  }else if(event.which === KEY.W || event.which === KEY.S){
    leftPaddle.speedY = 0;
  }
}

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function drawObject(obj) {
    
    $(obj.id).css("left", obj.x); // draw the paddle in the new location, positionX pixels away from the "left"
    $(obj.id).css("top", obj.x);
  }
  function moveObject(obj) {
    obj.x += obj.speedX; // update the position of the paddle along the x-axis
    obj.y += obj.speedY;
     
  
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
