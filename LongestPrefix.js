var longestCommonPrefix = function(strs) {

    let prefixArray = [];
    for(let i = 0; i < strs[0].length; i++) {

           if (allContainChar(strs[0][i], strs, i)) {
               prefixArray.push(strs[0][i])
           } else {
               return prefixArray.join('')
           }
        
    }
    
    
    return prefixArray.join('')
    
};


    
function allContainChar(char, strs,index) {

    for (let i = 0; i < strs.length; i++) {
        if (strs[i][index] !== char) {

            return false
        }
    }
    
    
    return true
}