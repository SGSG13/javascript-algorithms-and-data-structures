/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const map = new Map();
    let res = [];
    let currentMinIndex = list1.length + list2.length;

    for(let i = 0; i < list1.length; i++) {
        map.set(list1[i], i)
    }

    for(let i = 0; i < list2.length; i++) {
        if (map.has(list2[i])) {
            const index = map.get(list2[i]) + i;

            if (index === currentMinIndex) {
                res.push(list2[i]);
            } else if (index < currentMinIndex) {
                res = [list2[i]];
                currentMinIndex = index;
            }
        }
    }

    return res;
};