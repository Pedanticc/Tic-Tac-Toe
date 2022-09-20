
let XorO = "X"

// --- Event listener for all boxes
// --- Used the Target algo here. The func knows exactly where to print the symbol. Passed the element as a parameter.
for (let i = 0; i < allBoxes.length; i++) {
    allBoxes[i].addEventListener('click', function() {printBox(allBoxes[i]), false} );
}

function printBox(targert){
    let printing =  ""
    console.log("clicked")
    if (XorO == "X"){printing = "X"; XorO = "O"}
    else{printing = "O"; XorO = "X"}
    targert.innerText = printing
}