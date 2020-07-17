// This file contains the game logic.
// All the event-listening should happen in buttons.js 
let options = ["green", "red", "yellow", "blue"];
let comp = [options[Math.floor(Math.random() * 4)]];
let round = 1;
let i = 0;

function startGame() {
    setTimeout(lightUp, 1000);
}

function checkPlayer() {
    console.log(moves, comp)
    if (moves.length === comp.length) {  //compares move lengths to see if turn is over
        if (JSON.stringify(moves) == JSON.stringify(comp)) { //checks to see if user moves match computer moves
            //comp move
            generateNextColor();
            i = 0;
            setTimeout(lightUp, 1000);

        } else {
            fail();
        }
    } else {
        //if user moves don't match computer moves during turn then user fails
        for (let i = 0; i < moves.length; i++) {
            if (moves[i] !== comp[i]) {
                fail();
                return;
            }
        }
    }
}

function fail() {
    document.querySelector(".fail").style.display = 'block';
    document.querySelector(".simon-button").removeEventListener("click", function () { console.log("removed") });
}

function generateNextColor() {
    round++;
    document.querySelector("#round").innerHTML = round;
    comp.push(options[Math.floor(Math.random() * 4)]);
    moves = [];
}

function lightUp() {
    setTimeout(clearColor, 1000)
    if (i < comp.length) {
        document.querySelector(`.${comp[i]}`).classList.add("light-up");
        switch (comp[i]) {
            case "red":
                let sound1 = red.cloneNode();
                sound1.play();
                break;
            case "green":
                let sound2 = green.cloneNode();
                sound2.play();
                break;
            case "blue":
                let sound3 = blue.cloneNode();
                sound3.play();
                break;
            case "yellow":
                let sound4 = yellow.cloneNode();
                sound4.play();
                break;
            default:
                console.log("?");
        }
        setTimeout(lightUp, 1500);
    } else {
        clearColor();
    }
    i++;
}

function clearColor() {
    //  console.log(document.querySelector(".simon-button").classList)

    var buttons = document.getElementsByClassName("simon-button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("light-up");
    }

}
//test
function reset() {
    location.reload();
}