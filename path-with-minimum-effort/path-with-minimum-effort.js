/**
 * @param {number[][]} heights
 * @return {number}
 */

const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

function inBoundaries(row, col, rows, cols) {
    return row >= 0 && row < rows && col >= 0 && col < cols;
}

var minimumEffortPath = function(heights) {
    const rows = heights.length;
    const cols = heights[0].length;
    const minEffort = new Array(rows).fill(null).map(() => new Array(cols).fill(Infinity));
    const visited = new Array(rows).fill(null).map(() => new Array(cols).fill(false));
    const minQueue = new MinPriorityQueue({ priority: (element) => element[2] });

    minQueue.enqueue([0, 0, 0]);

    while(minQueue.size() > 0) {
        const [row, col, effort] = minQueue.dequeue().element;
        if(visited[row][col]) continue;
        if(row === rows - 1 && col === cols - 1) return effort;

        visited[row][col] = true;

        for(let [dR, dC] of directions) {
            const newRow = row + dR;
            const newCol = col + dC;

            if(inBoundaries(newRow, newCol, rows, cols)) {
                const diff = Math.abs(heights[newRow][newCol] - heights[row][col]);
                const newEffort = Math.max(effort, diff);

                if(newEffort < minEffort[newRow][newCol]) {
                    minEffort[newRow][newCol] = newEffort;
                    minQueue.enqueue([newRow, newCol, newEffort]);
                }
            }
        }
    }
};