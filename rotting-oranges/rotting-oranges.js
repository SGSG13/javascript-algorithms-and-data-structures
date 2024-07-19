/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const queue = [];
    const m = grid.length;
    const n = grid[0].length;
    let freshOranges = 0;
    let minutes = 0;
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 2) queue.push([i, j]);
            if(grid[i][j] === 1) freshOranges++;
        }
    }

    while(queue.length) {
        if(freshOranges === 0) break;
        const currentLength = queue.length;
        for(let i = 0; i < currentLength; i++) {
            const neighbors = getNeighbors(queue.shift(), grid, m, n);
            for(let neighbor of neighbors) {
                queue.push(neighbor);
                freshOranges--;
            }
        }
        minutes++;
    }

    return freshOranges === 0 ? minutes : -1;
};

const directions = [[0, 1], [1, 0], [-1, 0], [0, -1]];

function getNeighbors(position, grid, m, n) {
    const [x, y] = position;
    const result = [];

    for([dX, dY] of directions) {
        const newX = x + dX;
        const newY = y + dY;
        if(newX >= 0 && newX < m && newY >= 0 && newY < n && grid[newX][newY] === 1) {
            result.push([newX, newY]);
            grid[newX][newY] = 2;
        }
    }
    return result;
}
