/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    if(!grid.length || grid[0][0] === 1) return -1;
    const queue = [[0, 0, 1]];
    const m = grid.length;
    const n = grid[0].length;
   
    while(queue.length) {
        const currentPosition = queue.shift();
        const [x, y, path] = currentPosition;
        if(x === m - 1 && y === n - 1) return path;

        const neighbors = getNeighbors(currentPosition, grid, m, n);
        for(let neighbor of neighbors) {
            queue.push(neighbor);
        }
    }
    return -1;
};

const directions = [
    [0, 1], [1, 0], [-1, 0], [0, -1],
    [1, 1], [1, -1], [-1, -1], [-1, 1],
];

function getNeighbors (position, grid, m, n) {
    const [x, y, path] = position;
    const result = [];

    for([dX, dY] of directions) {
        const newX = x + dX;
        const newY = y + dY;
        if(inBoundries(newX, newY, m, n) && grid[newX][newY] === 0) {
            result.push([newX, newY, path + 1]);
            grid[newX][newY] = 1;
        }
    }

    return result;
}

function inBoundries(x, y, m, n) {
    return x >= 0 && x < m && y >= 0 && y < n;
}