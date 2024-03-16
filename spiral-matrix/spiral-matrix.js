/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix === null || matrix.length === 0) {
        return [];
    }

    const rows = matrix.length;
    const columns = matrix[0].length;
    let top = 0;
    let left = 0;
    let right = columns - 1;
    let bottom = rows - 1;
    const result = [];

    while (rows * columns > result.length) {
        // L -> R
        for(let col = left; col <= right; col++) {
            result.push(matrix[top][col]);
        }
        // T -> B
        for(let row = top + 1; row <= bottom; row++) {
            result.push(matrix[row][right]);
        }
        
        if(top !== bottom) {
            // R -> L
            for(let col = right - 1; col >= left; col--) {
                result.push(matrix[bottom][col]);
            }
        }

        if(right !== left) {
            // B -> T
            for(let row = bottom - 1; row > top; row--) {
                result.push(matrix[row][left]);
            }
        }
        
        bottom--;
        right--;
        top++;
        left++;
    }

    return result;
};