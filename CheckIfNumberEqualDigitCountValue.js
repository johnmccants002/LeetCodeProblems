/**
 * @param {string} num
 * @return {boolean}
 */
 var digitCount = function(num) {
    
    let match = [];
    let numArray = num.split('')
    let boolArray;
    
    for (let i= 0; i < numArray.length; i++) {
        if (getCount(numArray, i)) {
           
        } else {
            return false
        }
        
    }
    return true; 
    
};

function getCount(numArray, index) {
    let count = 0;
    for (let i = 0; i < numArray.length; i++) {
        if (index == numArray[i]) {
            count = count + 1
        }
    }
    
    if (count == numArray[index]) {
        return true
    } else {
        return false
    }
}