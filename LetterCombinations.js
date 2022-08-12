
 var letterCombinations = function(digits) {
    let values = [[], [], ["a", "b", "c"], ["d","e", "f"], ["g", "h", "i"], ["j", "k", "l"], ["m", "n", "o"], ["p", "q", "r", "s"], ["t", "u", "v"], ["w", "x", "y", "z"]]
    if (digits == "") return [];
    if (digits.length == 1) {
        return values[Number(digits)]
    }
    let digitArray = digits.split('')
    let output = [];
    let loopCount = values[digitArray[0]].length * values[digitArray[1]].length 
    let modulo = loopCount / values[digitArray[0]].length
    let secondModulo;
    let thirdModulo;
    if (digits.length > 2) {
        loopCount = loopCount * values[digitArray[2]].length
        modulo = loopCount / values[digitArray[0]].length
        secondModulo = modulo / values[digitArray[1]].length      
        if (digits.length == 4) {
            loopCount = loopCount * values[digitArray[3]].length
            modulo = loopCount / values[digitArray[0]].length
            secondModulo = modulo / values[digitArray[1]].length
            thirdModulo = secondModulo / values[digitArray[2]].length
        }       
    } 
    
    let countTwo = 0;
    let countOne = 0;
    let countThree = 0;
    let modNum = 0;
    let modCount = 0;    
    let mod2Num = 0;
    let mod2Count = 0;    
    let mod3Num = 0;
    let mod3Count = 0;
    
     for (let i = 1; i < loopCount + 1; i++) {
      
         if (modCount == modulo) {
             modNum++
             modCount = 0
         }
    
         if (mod2Count == secondModulo) {
             mod2Count = 0
             mod2Num++
             if (mod2Num == values[digitArray[1]].length) {
                 mod2Num = 0
             }
             
         }
         
         if (mod3Count == thirdModulo) {
             mod3Count = 0
             mod3Num ++
             if (mod3Num == values[digitArray[2]].length) {
                 mod3Num = 0
             }
         }
         
         if (countOne == values[digitArray[1]].length) {
             countOne = 0             
         }

         if(digits.length == 2) {
            output.push(values[digitArray[0]][modNum] + values[digitArray[1]][countOne]) 
         } else if (digits.length == 3) {
            if (countTwo == values[digitArray[2]].length) {
             countTwo = 0      
         }
             output.push(values[digitArray[0]][modNum] + values[digitArray[1]][mod2Num] + values[digitArray[2]][countTwo])
         } else if (digits.length == 4) {
             if (countThree == values[digitArray[3]].length) {
                 countThree = 0
             }
             output.push(values[digitArray[0]][modNum] + values[digitArray[1]][mod2Num] + values[digitArray[2]][mod3Num] + values[digitArray[3]][countThree])
         }
  
         countOne++
         countTwo++
         countThree++
         modCount++
         mod2Count++
         mod3Count++
     }
    return output;
       
};