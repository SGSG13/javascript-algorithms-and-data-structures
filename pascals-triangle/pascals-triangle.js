/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [[1]];

    for(let i = 1; i < numRows; i++) {
        let value = [];
        const prevValue = result[i - 1];

        value.push(1);
        
        for(let k = 1; k < i; k++) {
            value.push(prevValue[k - 1] + prevValue[k]);
        }

        value.push(1);

        result.push(value);
    }

    return result;
};