function calcNumbers(result){
    form.displayResult.value=form.displayResult.value+result;
    
}

function getAnswer(result){
    
    var calculation = result+"="+eval(result);
    var store = [];

    form.displayMemory.value = calculation;
    store.push(form.displayMemory.value);
    if(eval(result) == Infinity){
        return null;
    }
    else{
        return [eval(result),store];
        
    }
}


function calcNumbers(result){
    form.displayResult.value=form.displayResult.value+result;
    
}

function clr(){
    form.displayResult.value= null;
    form.displayMemory.value= null;
 }