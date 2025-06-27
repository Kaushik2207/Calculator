let input="";

function press(value){
    input+=value;
    document.getElementById("display").value=input;
}

function cleardisplay(){
    input="";
    document.getElementById("display").value=input;
}

function calculate(){
    let num1="";
    let num2="";
    let operator="";
    let operatorfound=false;

    for(let i=0;i<input.length;i++){
        let ch=input[i];
        if(!operatorfound && (ch== '+' || ch== '-' || ch== '*' ||ch== '/')){
            operator=ch;
            operatorfound=true;
        }
        else{
            if(!operatorfound){
                num1+=ch;
            }
            else{
                num2+=ch;
            }
        }
    }
    let a=parseInt(num1);
    let b=parseInt(num2);
    let result=0;

    if(operator=='+')result=a+b;
    else if(operator=='-')result=a-b;
    else if(operator=='*')result=a*b;
    else if(operator=='/'){
        if(b==0){
            result="ERROR";
        }
        else{
            result=a/b;
        }
    }
    document.getElementById("display").value=result;
    input=result.toString();
}
