var lengthOfLongestSubstring = function(s) {
    let longestSub = 0;
    let currentCount = 0;
    let splitS = s.split("")
    
    for (let i = 0; i < splitS.length; i++) {
        if (i = 0) {
            longestSub++
            
        } else if (splitS[i] == splitS[i - 1]){
            currentCount = 1;
            
        } else if(splitS[i] != splitS[i-1]) {
            currentCount++
           
        }
         if (currentCount > longestSub) {
            longestSub = currentCount
        }
        
        
    }
    return longestSub;
};