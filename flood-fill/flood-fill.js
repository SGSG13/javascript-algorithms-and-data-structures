/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
const isValid = (image, row, col, initColor, newColor) => {
    return row >= 0 &&
        row < image.length && 
        col >= 0 && 
        col < image[0].length &&
        image[row][col] !== newColor &&
        image[row][col] === initColor;
}

const dfs = (image, row, col, initColor, newColor) => {
    if (isValid(image, row, col, initColor, newColor)) {
        image[row][col] = newColor;
        dfs(image, row + 1, col, initColor, newColor);
        dfs(image, row -1, col, initColor, newColor);
        dfs(image, row, col + 1, initColor, newColor);
        dfs(image, row, col -1, initColor, newColor);
    }
}

var floodFill = function(image, sr, sc, color) {
    const queue = [[sr, sc]];
    const initColor = image[sr][sc];

    while(queue.length > 0) {
        const [row, col] = queue.shift();

        // dfs(image, row, col, initColor, color);

        image[row][col] = color;

        for(let[dr, dc] of directions) {
            const newR = row + dr;
            const newC = col + dc;
            if (!isValid(image, newR, newC, initColor, color)) continue;
            queue.push([newR, newC])
        }
    }

    return image;
};