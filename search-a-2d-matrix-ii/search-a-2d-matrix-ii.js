/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix === null || matrix.length === 0) return false;
    return searchRec(0, 0, matrix[0].length - 1, matrix.length - 1, matrix, target);
};

function searchRec(left, top, right, bottom, matrix, target) {
    if(left > right || top > bottom) return false;
    if(matrix[top][left] > target || matrix[bottom][right] < target) return false;

    const mid = left + Math.floor((right - left) / 2);
    let row = top;

    while(row <= bottom && matrix[row][mid] <= target) {
        if(matrix[row][mid] === target) return true;
        row++;
    }

    return searchRec(left, row, mid - 1, bottom, matrix, target)
    || searchRec(mid + 1, top, right, row - 1, matrix, target);
}