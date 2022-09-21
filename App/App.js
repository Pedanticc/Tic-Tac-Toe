
let XorO = "X"

// --- Event listener for all boxes
// --- Used the Target algo here. The func knows exactly where to print the symbol. Passed the element as a parameter.
for (let i = 0; i < allBoxes.length; i++) {
    allBoxes[i].addEventListener('click', function() {printBox(allBoxes[i]), false} );
}

function printBox(targert){
    if(targert.innerText == ""){
        let printing =  ""
        console.log("clicked")
        if (XorO == "X"){printing = "X"; XorO = "O"; targert.classList.add("golden-box")}
        else{printing = "O"; XorO = "X"; targert.classList.add("green-box")}
        targert.innerText = printing
    }
}


let list = [

    "X", "O", "X",
    "O", "X", "X",
    "X", "O", "O",

]