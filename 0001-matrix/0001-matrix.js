/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
const isValid = (mat, row, col) => {
    return row >= 0 && row < mat.length && col >= 0 && col < mat[0].length;
}

var updateMatrix = function(mat) {
    const queue = [];
    const n = mat.length;
    const m = mat[0].length;
    const MAX = n * m;

    for(let row = 0; row < n; row++) {
        for(let col = 0; col < m; col++){
            if (mat[row][col] === 0) {
                queue.push([row, col]);
            } else {
                mat[row][col] = MAX;
            }
        }
    }

    while(queue.length > 0) {
        const [row, col] = queue.shift();

        for(let [dr, dc] of DIRS) {
            const newRow = row + dr;
            const newCol = col + dc;

            if (isValid(mat, newRow, newCol)) {
                if(mat[newRow][newCol] > mat[row][col] + 1) {
                    mat[newRow][newCol] = mat[row][col] + 1;
                    queue.push([newRow, newCol]);
                }
            }
        }
    }

    return mat;
};