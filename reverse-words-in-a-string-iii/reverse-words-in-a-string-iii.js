/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let lastSpaceIndex = -1;
    let length = s.length;
    let chArray = Array.from(s);

    for(let strIndex = 0; strIndex <= length; strIndex++) {
        if (chArray[strIndex] === ' ' || strIndex === length) {
            let start = lastSpaceIndex + 1;
            let end = strIndex - 1;

            while (start < end) {
                const temp = chArray[start];
                chArray[start] = chArray[end];
                chArray[end] = temp;
                start++;
                end--;
            }

            lastSpaceIndex = strIndex;
        }
    }

    return chArray.join('')
};