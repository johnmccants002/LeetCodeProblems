var search = function(nums, target) {
    let index;
    if (nums.length > 1) {
      return nums.indexOf(target) 
    } else if (nums.length == 1){
        if (target === nums[0]) {
            return 0
        } else {
            return -1
        }     
    } else {
        return -1
    }

};