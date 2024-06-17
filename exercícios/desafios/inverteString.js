function spinWords(string){
   
   let newString=""
   let divideString = string.split(" ")

 for(let x = 0;x <= divideString.length -1;x++ ){
    if(divideString[x].length >=5){
        for( let i = divideString[x].length-1; i>= 0;i--){
            let palavra = divideString[x]
            newString += palavra[i];
            if(i==0){
                newString+= " ";
            }
        }
    } else{
        newString += divideString[x]+" "; 
    }
     
  }
  
    return newString.trim();
    
  }




console.log(spinWords("Hey fellow warriors"));

console.log(spinWords("Hoje tem pizza"));
 
console.log(spinWords("Amanhã"));

console.log(spinWords("Um dia frio, um bom lugar para ler um livro"));