let num1; 
let num2; 
let operator;
let answer;
let saveNumber;
let str;
let saveDot;

function operate(sign) { 

if ( sign == "+" ) { 
    answer = num1 + num2;
    
}
else if ( sign == "-") { 

    answer = num1 - num2;  
}

else if ( sign == "/" ) { 

    if ( num2 == 0) { 
        answer = "eu te amo Mariana";
        display.textContent = answer;
    }

    else {
    answer = num1 / num2;
    };
}

else if ( sign == "x" ) { 
    answer = num1 * num2;
   
}

};

function outputNumber(saveNumber) { 
    if(saveNumber == "back"){ 

    }
    else { 
    display.textContent += saveNumber;
    }

}



const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
const dot = document.querySelector('button[id="."]');


    buttons.forEach((button) => 
    { 
       
    button.addEventListener('click', ()=> {

        if (button.id == "back") { 
          display.textContent = display.textContent.substring(0, display.textContent.length - 1);
        }
        if (button.id == ".") { 
            saveDot = button.id 
            outputNumber(saveDot);
            button.disabled= true;

        }

        else if (button.id == "C") { 
             num1 = 0;
             num2 = 0;
             answer = 0;
             display.textContent = null;
        } 

        else if (button.id == "equal") { 
       
            str = display.textContent;
            num2 = str.split(operator).pop();
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            operate(operator);
            display.textContent = answer; 
            answer = num1;
            
        }

        else if ( button.id == "+" || button.id == "-" || button.id == "/" || button.id == "x" )  {

            if ( display.textContent.includes("+") == true || display.textContent.includes("/") == true || display.textContent.includes("-") == true || display.textContent.includes("x") == true  ) { 
                
                str = display.textContent;
                num2 = str.split(operator).pop();
                num1 = parseFloat(num1);
                num2 = parseFloat(num2);
                console.log(operate(operator));
                operator = button.id;
                display.textContent = answer + " " + operator; 
                num1 = answer;
        }        
                else {
                
                dot.disabled = false;
                operator = button.id;
                num1 = display.textContent;
                display.textContent = num1 + " " + operator +" ";
                
            }     
     }
    
            else  { 
                saveNumber = button.id 
                outputNumber(saveNumber);
            }   
     });
});






 

