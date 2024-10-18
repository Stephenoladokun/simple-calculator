display = document.getElementById("display");

function characters(input){
  display.value += input;
}

function cleardisplay (){
    display.value = " "
}

function answer(){
    let ans = eval(display.value);
    display.value = ans;
}

 