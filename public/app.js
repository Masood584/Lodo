

function redArea() {
    var parentRed = document.querySelector(".red-path");
    var crDiv = document.createElement("div")
    var child_red = crDiv.className = "red-box"
    parentRed.appendChild(crDiv)

}

for (i = 1; i <= 18; i++) {
    redArea()
}


function blueArea() {
    var parentblue = document.querySelector(".blue-home-1");
    var crDiv1 = document.createElement("div");
    var child_blue = crDiv1.className = "blue-box"
    parentblue.appendChild(crDiv1)

}

for (i = 1; i <= 18; i++) {
    blueArea()
}


function greenArea() {
    var parentgreen = document.querySelector(".green-path");
    var crDiv2 = document.createElement("div");
    var child_green = crDiv2.className = "green-box"
    parentgreen.appendChild(crDiv2)

}

for (i = 1; i <= 18; i++) {
    greenArea()
}


function yellowArea() {
    var parentyellow = document.querySelector(".yellow-path");
    var crDiv3 = document.createElement("div");
    var child_green = crDiv3.className = "yellow-box"
    parentyellow.appendChild(crDiv3)

}

for (i = 1; i <= 18; i++) {
    yellowArea()
}

var dice_parent_red = document.querySelector(".red-home-1");
var creDiv = document.createElement("div");
creDiv.className = "red-dice-area"
dice_parent_red.appendChild(creDiv)


var dice_parent_blue = document.querySelector(".blue-path");
var creDiv1 = document.createElement("div");
creDiv1.className = "blue-dice-area"
dice_parent_blue.appendChild(creDiv1)


var dice_parent_green = document.querySelector(".green-home-1");
var creDiv2 = document.createElement("div");
creDiv2.className = "green-dice-area"
dice_parent_green.appendChild(creDiv2)


var dice_parent_yellow = document.querySelector(".yellow-home-1");
var creDiv3 = document.createElement("div");
creDiv3.className = "yellow-dice-area"
dice_parent_yellow.appendChild(creDiv3)


function redDice() {
    var redDice = document.querySelector(".red-dice-area")
    var creaDiv = document.createElement("div")
    creaDiv.className = "red-dices"
    redDice.appendChild(creaDiv)
}

for (i = 1; i <= 4; i++) {
    redDice()
}


function blueDice() {
    var blueDice = document.querySelector(".blue-dice-area")
    var creaDiv1 = document.createElement("div")
    creaDiv1.className = "blue-dices"
    blueDice.appendChild(creaDiv1)
}

for (i = 1; i <= 4; i++) {
    blueDice()
}


function greenDice() {
    var greenDice = document.querySelector(".green-dice-area")
    var creaDiv2 = document.createElement("div")
    creaDiv2.className = "green-dices"
    greenDice.appendChild(creaDiv2)
}

for (i = 1; i <= 4; i++) {
    greenDice()
}


function yellowDice() {
    var yellowDice = document.querySelector(".yellow-dice-area")
    var creaDiv3 = document.createElement("div")
    creaDiv3.className = "yellow-dices"
    yellowDice.appendChild(creaDiv3)
}

for (i = 1; i <= 4; i++) {
    yellowDice()
}

