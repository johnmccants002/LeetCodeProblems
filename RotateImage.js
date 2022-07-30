var rotate = function(matrix) {
          
    for(let t = 0; t < matrix[0].length; t++) {
        let i = matrix[0].length - (t+1);
        let array = [];
        for (let x = matrix[0].length - 1; x > -1; x--) {
            array.push(matrix[x][i])    
        }
        matrix.push(array)   
    }
    matrix.splice(0, matrix[0].length)
    matrix.reverse()
}