/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const map = new Map();

    for(let row = 0; row < board.length; row++) {
        for(let column = 0; column < board[row].length; column++){
            const val = board[row][column];
            if (val !== '.') {
                const rowKey = `r${row}`;
                const columnKey = `c${column}`;
                const boxKey = `b${Math.floor(row / 3) * 3 + Math.floor(column / 3)}`

                if (map.has(boxKey)) {
                    const boxList = map.get(boxKey);

                    if (boxList.includes(val)) {
                        return false;
                    }

                    boxList.push(val)
                } else {
                    map.set(boxKey, [val])
                }

                if (map.has(rowKey)) {
                    const rowList = map.get(rowKey);

                    if (rowList.includes(val)) {
                        return false;
                    }

                    rowList.push(val)
                } else {
                    map.set(rowKey, [val])
                }

                if (map.has(columnKey)) {
                    const columnList = map.get(columnKey);

                    if (columnList.includes(val)) {
                        return false;
                    }

                    columnList.push(val)
                } else {
                    map.set(columnKey, [val])
                }
            }
        }
    }

    return true;
};