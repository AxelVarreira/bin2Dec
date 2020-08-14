const input = document.querySelector('#container .input');
const output = document.querySelector('#container .output');
const btn = document.querySelector('button');



btn.addEventListener("click", () => {
    //passar o valor do input para um array
    const numberArray = input.value.toString().split('');
    console.log(numberArray);
    
    //verificar se há somente 0s, 1s e no maximo 8 caracteres
    let counter=0;
    const count = 0;
    numberArray.forEach(numberArray => {
        if(numberArray!='0' && numberArray!='1'){
            alert("Isn't a binary code!")
            count++;
        }else{
            counter++;
        }
    });

    //If theres another number instead 0s and 1s, 'count' will be different of 0
    if(count==0 && counter<=8){
        binaryConverter(input.value);
    }else{
        alert("Number of numbers exceed!")
    }    
}); 

//Function that makes the 
function binaryConverter(input){
    var result = parseInt(input, 2);
    output.value = result;
}