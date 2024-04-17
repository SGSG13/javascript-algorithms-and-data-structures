/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */

const GATE = 0;
const EMPTY = 2147483647;

const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];

const inBounds = (c, r, arr) => {
    return c >= 0 && r >=0 && c < arr.length && r < arr[0].length;
}

var wallsAndGates = function(rooms) {
    const m = rooms.length;
    const n = rooms[0].length;
    const queue = [];

    for(let col = 0; col < m; col++) {
        for(let row = 0; row < n; row++) {
            if (rooms[col][row] === GATE) {
                queue.push([col, row]);
            }
        }
    }

    while(queue.length) {
        const [roomCol, roomRow] = queue.shift();

        for(let [dc, dr] of DIRS) {
            const c = roomCol + dc;
            const r = roomRow + dr;
            
            if (!inBounds(c, r, rooms) || rooms[c][r] !== EMPTY) {
                continue;
            }

            rooms[c][r] = rooms[roomCol][roomRow] + 1;
            queue.push([c, r]);
        }
    }
};