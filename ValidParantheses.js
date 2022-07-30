// Valid Parantheses https://leetcode.com/problems/valid-parentheses/

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if: 

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order. //

var isValid = function(s) {   
    let splitString = s.split('')
    let splitStringCopy = s.split('')
    let splitStringCopy2 = s.split('')
    let beginningChars = ['{', '[', '(']
    let charObj = {'{': '}', '[': ']', '(': ')'}

    for (let i = 0; i < splitString.length; i++) {
        if (beginningChars.includes(splitString[i])) {
            char = splitString[i]
            let endingChar = false;
            for (let x = 0; x < splitString.length; x++) {
                if (charObj[splitString[i]] == splitString[x]) {   
                    splitStringCopy = splitStringCopy.splice(i, 1)
                    splitStringCopy2 = splitStringCopy2.splice(x, 1)
                    endingChar = true
                }  
            }
            if (endingChar == false) {
                return false
            }
        } 
      
  
    }

    return splitStringCopy.length == splitStringCopy2.length;
};