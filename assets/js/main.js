var equality =""

function addchar(char){
    equality = equality + char;
    document.getElementById("result").innerHTML=equality;
}

function equal(){
    var result = eval(equality);
    document.getElementById("result").innerHTML=result;
}

function backspace(){
    equality = equality.slice(0,-1);
    document.getElementById("result").innerHTML=equality;
}

function clearall(){
    equality="";
    document.getElementById("result").innerHTML=equality;
}