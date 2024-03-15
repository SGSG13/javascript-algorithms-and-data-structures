/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    if (mat === null || mat.length === 0) {
        return [];
    }

    const M = mat.length;
    const N = mat[0].length;
    let row = 0;
    let column = 0;
    let direction = 1;
    let rIndex = 0;
    const result = [];

    while (row < M && column < N) {
        result[rIndex++] = mat[row][column];

        const newRow = row + (direction === 1 ? -1 : 1);
        const newColumn = column + (direction === 1 ? 1 : -1);

        if(newRow < 0 || newRow === M || newColumn < 0 || newColumn === N) {
            if(direction === 1) {
                row += (column === N - 1 ? 1 : 0);
                column += (column < N - 1 ? 1: 0);
            } else {
                column += (row === M - 1 ? 1 : 0);
                row += (row < M - 1 ? 1 : 0);
            }
            direction = 1 - direction;
        } else {
            row = newRow;
            column = newColumn;
        }
    }

    return result;
};