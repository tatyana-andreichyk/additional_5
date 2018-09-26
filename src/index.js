module.exports = function check(str, bracketsConfig) {

    let openBrackets = {};
    
    for (let i = 0; i < bracketsConfig.length; i++){
        openBrackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
    }
    
    let stack = [];
    
    let arrayElemStr = str.split("");

    for (let j = 0; j < arrayElemStr.length; j++){
 
		let currentElemInStack = stack.pop();
        let closingPairElementInStack = openBrackets[currentElemInStack];
        
       if (openBrackets[arrayElemStr[j]] && (arrayElemStr[j] !== currentElemInStack)) {
		   stack.push(currentElemInStack);
           stack.push(arrayElemStr[j]);
       } else {
           if (arrayElemStr[j] !== closingPairElementInStack){
               return false;               
           }
       }  
    }
    

    if (stack.pop()){
        return false;
    }else{
		return true;
	}
    
}