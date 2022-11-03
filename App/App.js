let XorO = "X"
const allPossibleDirection = [allRow1Boxes, allRow2Boxes, allRow3Boxes,
                              allColumn1Boxes, allColumn2Boxes, allColumn3Boxes,
                              allZ1Boxes, allZ2Boxes]

const checkBoxes = arr => arr.every(v => v === arr[0])
const sleep = ms => new Promise(r => setTimeout(r, ms))

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

    checkStatus()

}


async function checkStatus(){
    let result = []
    for (let i = 0; i < allPossibleDirection.length; i++){
        for (let j = 0; j < 3; j++){
            let box = (allPossibleDirection[i])[j].innerText
            box === "" ? result.push("") : result.push(box)
        }
        console.log(result)
        if ( result.filter((v) => (v === "")).length > 2){ // Filters the arrays or boxes with 3 empty objects ("")

        }
        else{
            if (checkBoxes( result )){console.log("win")}
        }
        result = []
    }
}
