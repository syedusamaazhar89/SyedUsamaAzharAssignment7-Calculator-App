function getNum(num){
    var result = document.getElementById("result");
    result.value += num;
}

function Clear(){
    var result = document.getElementById("result");
    result.value = "";
}

function Delete(){
    var preresult = result.value;
    result.value = preresult.substr(0,preresult.length-1);
}


function Result(){
    var result = document.getElementById("result");
    result.value = eval(result.value);
}
