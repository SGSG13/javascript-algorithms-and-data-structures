/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let longestSrt = '';
    let result = ''

    for(let i = 0; i < strs.length; i++) {
        if (strs[i].length > longestSrt.length) {
            longestSrt = strs[i];
        }
    }

    if (longestSrt === '') {
        return result;
    }

    for(let i = 0; i < longestSrt.length; i++) {
        let count = 0;
        for(let j = 0; j < strs.length; j++) {
            if(longestSrt[i] === strs[j][i]) {
                count++;
            }
        }
        if (count === strs.length) {
            result += longestSrt[i];
        } else {
            return result;
        }
    }

    return result;
};