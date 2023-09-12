const ticAndTac = ["X", "O"]
let XorO = ticAndTac[Math.floor(Math.random() * 2)] // --- Who's turn it is.
const allPossibleDirections = [allRow1Boxes, allRow2Boxes, allRow3Boxes,
                              allColumn1Boxes, allColumn2Boxes, allColumn3Boxes,
                              allZ1Boxes, allZ2Boxes] // --- Each direction contains its own boxes.
let roudCounter = 0
const checkBoxes = arr => arr.every(v => v === arr[0]) // --- Checks every array (or boxes). If it contains 3 identical objects, that's a win. Excluding ["","",""] in [1] because that's also considered a win when it shouldn't be.
// --- An array because each direction contains 3 boxes .. that means it's a list of 3 boxes that we have to go through and check.
const sleep = ms => new Promise(r => setTimeout(r, ms))
let game_win = false
let game_draw = false

// --- Event listener for all boxes
// --- Used the Target algo here. The func knows exactly where to print the symbol. Passed the element as a parameter.
for (let i = 0; i < allBoxes.length; i++) {
    allBoxes[i].addEventListener('click', function() {printBox(allBoxes[i]), false} )
}

restartButton.addEventListener('click', function() {restartGame()} )

function printBox(targert){
    if(targert.innerText == ""){
        let printing =  ""
        if (XorO == "X"){printing = "X"; XorO = "O"; targert.classList.add("golden-box")}
        else{printing = "O"; XorO = "X"; targert.classList.add("green-box")}
        targert.innerText = printing
    }
    checkGame() // --- After each click we check the boxes of each possible direction.
    whosTurn()
}

function checkGame(){
    roudCounter ++
    if (roudCounter >= 9){draw()}
    let result = []
    for (let i = 0; i < allPossibleDirections.length; i++){ // --- Going through containers or directions such as ==> r-1, r-2, r-3, c-1, c-2, ...
        for (let j = 0; j < 3; j++){ // --- Going through boxes inside the containers, or boxes that form a specific direction.
            let box = (allPossibleDirections[i])[j].innerText
            box === "" ? result.push("") : result.push(box)
        }

        if (result.filter((v) => (v === "")).length > 2){} // --- Filters the arrays or boxes with 3 empty objects ("") [1]
        
        else{
            if (checkBoxes(result)){
                win(allPossibleDirections[i]) // --- Passing the direction that has 3 identical objects (Shapes) so that we can style each box.
                break // --- We don't need to check for other directions if there is any left.
            }
        }
        result = []
    }
}

async function win(target){
    game_win = true
    let winner = target[0].innerText
    restartButton.style.pointerEvents = "auto"
    container.style.pointerEvents = "none"
    for (let i = 0; i < 3; i++){
        await sleep (100)
        target[i].style.transition = "300ms"
        target[i].style.backgroundColor = "rgb(0, 0, 0, 0.5)"
    }
    restartButton.style.opacity = "100%"
    restartButton.style.bottom = "-75px"

    console.log(xPoints.innerText)
    
    switch (winner){
        case "X":
            console.log("here")
            xPoints.innerText = Number(xPoints.innerText) + 1
            break
        case "O":
            oPoints.innerText = Number(oPoints.innerText) + 1
            break
    }

    if (Number(xPoints.innerText) > Number(oPoints.innerText)){
        leadX.style.display = "block"
        leadO.style.display = "none"
    }
    else if (Number(xPoints.innerText) < Number(oPoints.innerText)){
        leadO.style.display = "block"
        leadX.style.display = "none"
    }

    else if (Number(xPoints.innerText) == Number(oPoints.innerText)){
        leadO.style.display = "none"
        leadX.style.display = "none"
    }

    else{

    }
}

function draw(){
    roudCounter = 0
    game_draw = true
    restartButton.style.pointerEvents = "auto"
    container.style.pointerEvents = "none"
    restartButton.style.opacity = "100%"
    restartButton.style.bottom = "-75px"
}


function whosTurn(){
    if (game_draw === true || game_win === true){
        oTurnBox.classList.add("game-over")
        xTurnBox.classList.add("game-over")
    }
    else{
        switch(XorO){
            case "X":
                oTurnBox.classList.remove("your-turn")
                xTurnBox.classList.add("your-turn")
                break
            case "O":
                xTurnBox.classList.remove("your-turn")
                oTurnBox.classList.add("your-turn")
                break
        }
    }   
}

function restartGame(){
    restartButton.style.bottom = "-300px"
    XorO = ticAndTac[Math.floor(Math.random() * 2)]
    container.style.pointerEvents = "auto"
    xTurnBox.classList.remove("game-over")
    oTurnBox.classList.remove("game-over")
    game_draw = false
    game_win = false
    roudCounter = 0
    for (let box of allBoxes){
        box.classList.remove("golden-box"); box.classList.remove("green-box")
        box.innerText = ""
        box.style.backgroundColor = ""
    }
    whosTurn()
}

whosTurn()