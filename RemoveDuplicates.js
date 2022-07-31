/**
 * @param {number[]} nums
 * @return {number}
 */

// Testing
var john;
 var removeDuplicates = function(nums) {
    let duplicates = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums.range.includes(nums[i]))
        if (duplicates.includes(nums[i])) {
            nums.splice(i, 1)
        } else {
            duplicates.push(nums[i])
        }
    }
        
    console.log(nums, duplicates)
    return nums
};
