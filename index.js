const bingoFields = 76
// there are 76 bingo fields so we need a loop function that,....

function displayFieldsOfBingo() {

    let divId = document.getElementById("container") 
        for (let bingoField = 1; bingoField <= bingoFields; bingoField++) {
            
            let bingoFieldNode = document.createElement("div")

            bingoFieldNode.innerText = bingoField 
            bingoFieldNode.classList.add("bingoField")
            
        divId.appendChild(bingoFieldNode)
        }
    
}
displayFieldsOfBingo()


function clickButton(event) {
    //let clickableButton = event.target
   // let click = getElementById.target???
  // ((Math.random + 1 )Math.floor)
}
