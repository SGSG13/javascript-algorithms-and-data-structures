/**
 * @param {string} digits
 * @return {string[]}
 */
 const dictionary = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
 }

var letterCombinations = function(digits) {
    if(!digits.length) return [];
    const result = [];

    function backtrack(numStart, curr) {
        if(curr.length === digits.length) {
            result.push(curr.join(''));
            return;
        }

        const letters = dictionary[digits[numStart]];
        for(let letter = 0; letter < letters.length; letter++) {
            curr.push(letters[letter]);
            backtrack(numStart + 1, curr);
            curr.pop(); 
        }
    }

    backtrack(0, [])
    return result;
};