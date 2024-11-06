let count=0;

document.getElementById("decreaseButton").onclick = function(){
    count=count-1;
    document.getElementById("myLabel").innerHTML=count;
}
document.getElementById("resetButton").onclick = function(){
    count=0;
    document.getElementById("myLabel").innerHTML=count;
}
document.getElementById("increaseButton").onclick = function(){
    count=count+1;
    document.getElementById("myLabel").innerHTML=count;
}