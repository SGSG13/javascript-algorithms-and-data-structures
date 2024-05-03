/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const visited = new Array(rooms.length).fill(false);
    const stack = [0];
    let roomCount = 1;
    visited[0] = true;

    while(stack.length) {
        const keys = rooms[stack.pop()];
        for(let key of keys) {
            if (!visited[key]) {
                stack.push(key);
                visited[key] = true;
                roomCount++;
            }
        }
    }

    return roomCount === rooms.length;
};