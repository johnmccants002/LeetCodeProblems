var maximumWealth = function(accounts) {
    let max = 0;
    for (let i = 0; i < accounts.length; i++) {
        let sum = 0;
        for (let x = 0; x < accounts[i].length; x ++) {
            sum = sum + accounts[i][x]
        }
        if (sum > max) {
            max = sum
        }
    }
    
    return max
};