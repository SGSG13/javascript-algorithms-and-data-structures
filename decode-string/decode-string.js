/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = [];
    let currStr = '';
    let currNum = 0;

    for(let i = 0; i < s.length; i++) {
        if(s[i] === '[') {
            stack.push([currNum, currStr]);
            currNum = 0;
            currStr = '';
        } else if (s[i] === ']') {
            const [prevNum, prevStr] = stack.pop();
            currStr = prevStr + currStr.repeat(prevNum);
        } else if (!isNaN(s[i])) {
            currNum = `${currNum}${s[i]}`;
        } else {
            currStr += s[i];
        }
    }

    return currStr
};