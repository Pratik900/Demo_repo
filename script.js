function one(){
    parseFloat(document.getElementById("answer").value += "1");
}
function two(){
parseFloat(document.getElementById("answer").value += "2");
}
function three(){
    parseFloat(document.getElementById("answer").value += "3");
}
function four(){
parseFloat(document.getElementById("answer").value += "4");
}
function five(){
    parseFloat(document.getElementById("answer").value += "5");
}
function six(){
parseFloat(document.getElementById("answer").value += "6");
}
function seven(){
    parseFloat(document.getElementById("answer").value += "7");
}
function eight(){
parseFloat(document.getElementById("answer").value += "8");
}
function nine(){
    parseFloat(document.getElementById("answer").value += "9");
}
function add(){
parseFloat(document.getElementById("answer").value += "+");
}
function division(){
    parseFloat(document.getElementById("answer").value += "/");
}

function zero(){
    parseFloat(document.getElementById("answer").value += "0");
}

function mul(){
    parseFloat(document.getElementById("answer").value += "*");
}
function minus(){
parseFloat(document.getElementById("answer").value += "-");
}

function equal(){
    var result = eval(document.getElementById("answer").value);
    document.getElementById("answer").value = result;
}
function ce(){
    document.getElementById("answer").value ="";
}
