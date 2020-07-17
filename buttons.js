let moves = [];

let green = new Audio("sound1.mp3");
let blue = new Audio("sound2.mp3");
let yellow = new Audio("sound3.mp3");
let red = new Audio("sound4.mp3");

document.querySelector('#start').addEventListener('click', function () {
  startGame();
    document.querySelector(".fail").style.display = 'none';



  document.querySelector('.simon-button.green').addEventListener('click', function () {
    moves.push("green");
    let sound = green.cloneNode();
    sound.play();
    checkPlayer();
  });

  document.querySelector('.simon-button.blue').addEventListener('click', function () {
    moves.push("blue");
    let sound = blue.cloneNode();
    sound.play();
    checkPlayer();
  });

  document.querySelector('.simon-button.yellow').addEventListener('click', function () {
    moves.push("yellow");
    let sound = yellow.cloneNode();
    sound.play();
    checkPlayer();
  });

  document.querySelector('.simon-button.red').addEventListener('click', function () {
    moves.push("red");
    let sound = red.cloneNode();
    sound.play();
    checkPlayer();
  });
});

document.querySelector('#reset').addEventListener('click', function () {
  reset();
});