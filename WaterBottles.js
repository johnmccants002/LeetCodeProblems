var numWaterBottles = function(numBottles, numExchange) {
    let fullWaterBottles = numBottles
    let totalBottles = 0;
    let emptyBottles = 0;
    
    
    
    while (fullWaterBottles >= numExchange) {
        let newBottles = Math.floor(fullWaterBottles / numExchange)
        let remainderBottles = fullWaterBottles % numExchange
        totalBottles += numExchange * newBottles
        fullWaterBottles = newBottles + remainderBottles
    }
     totalBottles += fullWaterBottles
   
    
     return totalBottles
 };