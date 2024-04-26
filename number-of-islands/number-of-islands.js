/**
 * @param {character[][]} grid
 * @return {number}
 */

const WATER = '0';
const LAND = '1';

const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];

const inBound = (c, r, arr) => c >= 0 && c < arr.length && r >= 0 && r < arr[0].length;

const dfs = (c, r, grid) => {
    if (!inBound(c, r, grid) || grid[c][r] === WATER) {
        return;
    }

    grid[c][r] = WATER;

    for (let [cd, rd] of DIRS) {
        const newC = c + cd;
        const newR = r + rd;

        dfs(newC, newR, grid);
    }
};

var numIslands = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let count = 0;

    for(let col = 0; col < m; col++) {
        for(let row = 0; row < n; row++) {
            if (grid[col][row] === LAND) {
                count++;
                dfs(col, row, grid);
            }
        }
    }

    return count;
};