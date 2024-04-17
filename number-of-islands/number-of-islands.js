/**
 * @param {character[][]} grid
 * @return {number}
 */

const WATER = '0';
const LAND = '1';

const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];

const inBound = (c, r, arr) => c >= 0 && c < arr.length && r >= 0 && r < arr[0].length;

var numIslands = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let count = 0;

    for(let col = 0; col < m; col++) {
        for(let row = 0; row < n; row++) {
            if (grid[col][row] === LAND) {
                count++;
                const queue = [[col, row]];

                while(queue.length) {
                    const [landCol, landRow] = queue.shift();

                    if (grid[landCol][landRow] === WATER) {
                        continue;
                    }

                    for(let [cd, rd] of DIRS) {
                        const c = landCol + cd;
                        const r = landRow + rd;

                        if (!inBound(c, r, grid)) {
                            continue;
                        }

                        queue.push([c, r])
                    }

                    grid[landCol][landRow] = WATER;
                }
            }
        }
    }

    return count;
};