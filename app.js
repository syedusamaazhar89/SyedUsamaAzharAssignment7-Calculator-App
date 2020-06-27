function getNum(num){
    var result = document.getElementById("result");
    result.value += num;
}

function Clear(){
    var result = document.getElementById("result");
    result.value = "";
}


function Result(){
    var result = document.getElementById("result");
    result.value = eval(result.value);
}
