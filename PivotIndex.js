var pivotIndex = function(nums) {   
    for (let i = 0; i < nums.length; i++) {
       const [left, right] = [nums.slice(0, i), nums.slice(i)];
       right.shift();
       let leftSum = left.reduce((a, b) => a + b, 0)
       let rightSum = right.reduce((a, b) => a + b, 0)
        if (leftSum == rightSum) {
            return i
        }
    }   
    return -1
    
};