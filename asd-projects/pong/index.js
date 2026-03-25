/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const BOARD_WIDTH = $("#board").width();
  const BOARD_HEIGHT = $("#board").height();
  
  // Game Item Objects
  var ball = makeGameItem("#ball");
  var leftPaddle = makeGameItem("#leftPaddle");
  var rightPaddle = makeGameItem("#rightPaddle");

  var score1 = 0;
  var score2 = 0;

  $("#score1").text(score1);
  $("#score2").text(score2);

  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on("keydown", handleKeyDown);
  $(document).on("keyup", handleKeyUp); 
  
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

 function makeGameItem(id){
  var item = {};
  item.id = id;
  item.x = parseFloat($(id).css("left"));
  item.y = parseFloat($(id).css("top"));
  item.width = $(id).width();
  item.height = $(id).height();
  item.speedX = 0;
  item.speedY = 0;
  return item;
 }

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  
  /* 
  Called in response to events.
  */
 
  const KEY = {
    W: 87,
    S: 83,
    UP: 38,
    DOWN: 40
  };

  function handleKeyDown(event) {
    if (event.which === KEY.W) {
      leftPaddle.speedY = -5;
    }
    if (event.which === KEY.S) {
      leftPaddle.speedY = 5;
    }
    if (event.which === KEY.UP) {
      rightPaddle.speedY = -5;
    }
    if (event.which === KEY.DOWN) {
      rightPaddle.speedY = 5;
    }
  }

  function handleKeyUp(event) {
    if (event.which === KEY.W || event.which === KEY.S) {
      leftPaddle.speedY = 0;
    }
    if (event.which === KEY.UP || event.which === KEY.DOWN) {
      rightPaddle.speedY = 0;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
//Wall collision function checks if ball goes pass the border
  function wallCollision(obj){
    
    if (obj.id !== "#ball") {
      if (obj.y <= 0) {
        obj.y = 0;
        obj.speedY = 0;
      }
      if (obj.y + obj.height >= BOARD_HEIGHT) {
        obj.y = BOARD_HEIGHT - obj.height;
        obj.speedY = 0;
      }
    }

    if (obj.id === "#ball") {
      if (obj.y <= 0 || obj.y + obj.height >= BOARD_HEIGHT) {
        obj.speedY *= -1;
      }

      if (obj.x <= 0) {
        score2++;
        $("#score2").text(score2);
        startBall();
        if (score2 >= 11) {
          alert("Player 2 wins!");
          endGame();
        }
      }

      if (obj.x + obj.width >= BOARD_WIDTH) {
        score1++;
        $("#score1").text(score1);
        startBall();

        if (score1 >= 11) {
          alert("Player 1 wins!");
          $(document).text("Game Over!")
          endGame();
        }
      }
    }
  }

  function doCollide(a, b){
    return !(
      a.x > b.x + b.width ||
      a.x + a.width < b.x ||
      a.y > b.y + b.height ||
      a.y + a.height < b.y
    );
  }
  //Helps us add speed and move the paddles
  function moveObject(obj) {
    obj.x += obj.speedX;
    obj.y += obj.speedY;

    $(obj.id).css("left", obj.x);
    $(obj.id).css("top", obj.y);
  }

  startBall();
  //function to put where the ball starts
  function startBall() {
    ball.x = BOARD_WIDTH / 2 - ball.width / 2;
    ball.y = BOARD_HEIGHT / 2 - ball.height / 2;

    ball.speedX = (Math.random() * 3 + 3) * (Math.random() > 0.5 ? -1 : 1);
    ball.speedY = (Math.random() * 3 + 3) * (Math.random() > 0.5 ? -1 : 1);
  }

  function newFrame(){
    moveObject(ball);
    moveObject(leftPaddle);
    moveObject(rightPaddle);

    wallCollision(ball);
    wallCollision(leftPaddle);
    wallCollision(rightPaddle);

    if (doCollide(ball, leftPaddle) || doCollide(ball, rightPaddle)) {
      ball.speedX = -ball.speedX;
    }
  }

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}