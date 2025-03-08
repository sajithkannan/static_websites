const display = document.getElementById("display");

function  appendTOdisplay(input){
  display.value += input;
}

function clearDisplay(){
  display.value = "";
}

function calculate()
  {
    try{
      display.value = eval(display.value);
    }
    catch(error){
      display.value = "Error";
    }
  }

function back()
{
  
display.value=display.value.slice(0,-1);
}
