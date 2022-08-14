var runningSum = function(nums) {
    let runningSum = [];
    let sum = [];
    let array = [];
    for (let i = 0; i < nums.length; i++) {
        array.push(nums[i])
        sum = array.reduce((a, b) => a + b, 0)
        runningSum.push(sum);    
    }  
    return runningSum
    
};