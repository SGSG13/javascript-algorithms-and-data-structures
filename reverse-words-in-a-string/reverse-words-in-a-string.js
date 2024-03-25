/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim();
    let curr = '';
    let count = 0;

    for(let i = 0; i <= s.length - 1; i++) {
        if (s[i] !== ' ') {
            curr += s[i];
        } 
        if ((s[i] === ' ' && curr.length) || i === s.length - 1) {
            curr = (i === s.length - 1 ? '' : ' ') + curr;
            s = curr + s;
            count += curr.length;
            i += curr.length;
            curr = '';
        }
    }

    return s.substring(0, count);;
};