/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let aLength = a.length - 1;
    let bLength = b.length - 1;
    let carry = 0;
    let result = '';
  
    for(; aLength >= 0 || bLength >= 0 || carry > 0; aLength--, bLength--) {
        let sum = (+a[aLength] || 0) + (+b[bLength] || 0) + carry;

        if (sum > 1) {
            sum = sum % 2;
            carry = 1;
        } else {
            carry = 0;
        }
        result = `${sum}${result}`;
    }

    return result;
};
