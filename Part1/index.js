let board = []

function play(clickedId){
    let whosTurn = document.getElementById('player')
    let clickedElement = document.getElementById(clickedId)
    if(whosTurn.innerText === 'X'){
        whosTurn.innerText = 'O'
        clickedElement.innerText ='X'
        board[clickedId] = 'X'
    }else {
        whosTurn.innerText = 'X'
        clickedElement.innerText = 'O'
        board[clickedId] = 'O'
    }

    

    console.log(board)

    let topL = board[0]
    let topC = board[1]
    let topR = board[2]
    let midL = board[3]
    let midC = board[4]
    let midR = board[5]
    let bottomL = board[6]
    let bottomC = board[7]
    let bottomR = board[8]
    //horizontal
    if(topL !== undefined && topL === topC && topL === topR){
        alert(`${topL} is the winner`)
        return
    }
    if(midL !== undefined && midL === midC && midL === midR){
        alert(`${midL} is the winner`)
        return
    }
    if(bottomL !== undefined && bottomL === bottomC && bottomL === bottomR){
        alert(`${bottomL} is the winner`)
        return
    }
    //vertical
    if(topL !== undefined && midL === bottomL && topL === midL){
        alert(`${topL} is the winner`)
        return
    }
    if(topC !== undefined && midC === bottomC && topC === midC){
        alert(`${topC} is the winner`)
        return
    }
    if(topR !== undefined && midR === bottomR && topR === midR){
        alert(`${topR} is the winner`)
        return
    }
    //diag
    if(topL !== undefined && midC === bottomR && topL === midC){
        alert(`${topL} is the winner`)
        return
    }
    if(topR !== undefined && midC === bottomL && topR === midC){
        alert(`${topR} is the winner`)
        return
    }

    let boardFull = true
    for(let i = 0; i <= 8; i++){
        if(board[i] === undefined){
            boardFull = false;
        }
    }

    if(boardFull === true){
        alert("No Winner")
    }
 
}

function reset(){
    for(let i = 0; i < 9; i++){
        board = []
        let change = document.getElementById(i)
        change.innerText = ''
        console.log(change)
    }
}