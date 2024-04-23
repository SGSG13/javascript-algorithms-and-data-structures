/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    const types = {
        ')': '(',
        ']': '[',
        '}': '{',
}   ;
    const stack = [];

    for(c of s) {   
        if (types[c]) {
            const topElement = stack.length === 0 ? '#' : stack.pop();
            if(topElement !== types[c]) return false;
        } else {
            stack.push(c);
        }
    }

    return stack.length === 0;
};