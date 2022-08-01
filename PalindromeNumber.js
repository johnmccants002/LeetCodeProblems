var isPalindrome = function(x) {
    let arrayX = String(x).split('')
    let end = arrayX.length - 1
    for (let i = 0; i < arrayX.length; i++) {     
        if (arrayX[i] == arrayX[end - i] && i != end - i) {
        } else if (i == end - i) {
            return true   
        } else {
            return false
        }
    } 
    return true
};