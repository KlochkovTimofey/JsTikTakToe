let area=[
["*","*","*"],
["*","*","*"],
["*","*","*"]
];
let turn=1;
let char="🌵";
function changeChar(){
    if(turn%2===1){
        char="🌵";
    }
    else{
        char="🍄";
    }
    document.querySelector(".turn").innerHTML=char;
}
function checkWinner(){
    if(area[0][0]=="🌵"&&area[0][1]=="🌵"&&area[0][2]=="🌵"){
        return"🌵";
    }
    if(area[0][0]=="🍄"&&area[0][1]=="🍄"&&area[0][2]=="🍄"){
        return"🍄";
    }
    if(area[1][0]=="🌵"&&area[1][1]=="🌵"&&area[1][2]=="🌵"){
        return"🌵";
    }
    if(area[1][0]=="🍄"&&area[1][1]=="🍄"&&area[1][2]=="🍄"){
        return"🍄";
    }
    if(area[2][0]=="🌵"&&area[2][1]=="🌵"&&area[2][2]=="🌵"){
        return"🌵";
    }
    if(area[2][0]=="🍄"&&area[2][1]=="🍄"&&area[2][2]=="🍄"){
        return"🍄";
    }
    if(area[0][0]=="🌵"&&area[1][0]=="🌵"&&area[2][0]=="🌵"){
        return"🌵";
    }
    if(area[0][0]=="🍄"&&area[1][0]=="🍄"&&area[2][0]=="🍄"){
        return"🍄";
    }
    if(area[0][1]=="🌵"&&area[1][1]=="🌵"&&area[2][1]=="🌵"){
        return"🌵";
    }
    if(area[0][1]=="🍄"&&area[1][1]=="🍄"&&area[2][1]=="🍄"){
        return"🍄";
    }
    if(area[0][2]=="🌵"&&area[1][2]=="🌵"&&area[2][2]=="🌵"){
        return"🌵";
    }
    if(area[2][0]=="🍄"&&area[2][1]=="🍄"&&area[2][2]=="🍄"){
        return"🍄";
    }
    if(area[0][0]=="🌵"&&area[1][1]=="🌵"&&area[2][2]=="🌵"){
        return"🌵";
    }
    if(area[0][0]=="🍄"&&area[1][1]=="🍄"&&area[2][2]=="🍄"){
        return"🍄";
    }
    if(area[0][2]=="🌵"&&area[1][1]=="🌵"&&area[2][0]=="🌵"){
        return"🌵";
    }
    if(area[0][2]=="🍄"&&area[1][1]=="🍄"&&area[2][0]=="🍄"){
        return"🍄";
    }
    return"*";

}

document.querySelector("button").onclick=function(){
    let row=document.querySelector(".row").value;
    row=row-1;
    let column=document.querySelector(".column").value;
    column=column-1;
    let rows=document.querySelectorAll("tr");
    let cells=rows[row].querySelectorAll("td");
    let cell=cells[column];
    if(area[row][column]!="🌵"&&area[row][column]!="🍄"){
        area[row][column]=char;
        cell.innerHTML=char;
        if(checkWinner()==="🌵"){
            alert("Победили 🌵");
        }
        if(checkWinner()==="🍄"){
            alert("Победили 🍄");
        }
        if(checkWinner()==="*"&&turn==9){
            alert("Ничья");
        }
    }
    




    turn=turn+1;
    changeChar();

}