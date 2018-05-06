var numSquares=6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll("#square");
var pickedColor=pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

colorDisplay.textContent=pickedColor;

easybtn.addEventListener("click",function(){
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    numSquares=3;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
        
    }
    h1.style.backgroundColor="steelblue";
    messageDisplay.textContent="";
});

hardbtn.addEventListener("click",function(){
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    numSquares=6;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display="block";
    }
    h1.style.backgroundColor="steelblue";
    messageDisplay.textContent="";
});

reset.addEventListener("click",function(){
    colors = generateRandomColors(numSquares);
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
    }
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    h1.style.backgroundColor="steelblue";
    messageDisplay.textContent="";
});

for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];
    square[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor===pickedColor){
            messageDisplay.textContent="Correct!!";
            changeColors(clickedColor);
            h1.style.backgroundColor=clickedColor;
            reset.textContent="Play Again?"
        }
        else{
            messageDisplay.textContent="Try Again!!";
            this.style.backgroundColor="#232323";
        }
    });
}

function changeColors(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}
function generateRandomColors(num){
    var arr=[];
    for(var i=0;i<num;i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}