function buttonClicked(val){

    document.getElementById("text-field").value+=val;

}
function clearClicked(){
    document.getElementById("text-field").value="";
}
function equalClicked(){
    let text = document.getElementById("text-field").value;
    let result=eval(text);
    document.getElementById("text-field").value=result;
}