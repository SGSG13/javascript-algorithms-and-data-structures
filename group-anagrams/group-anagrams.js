/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let groups = new Map();
    let counts = new Array(26).fill(0);

    for(let i = 0; i < strs.length; i++) {
        const key = getKey(strs[i], counts);

        if (groups.has(key)) {
            groups.get(key).push(strs[i]);
        } else {
            groups.set(key, [strs[i]])
        }
    }

    return [...groups.values()]
};

function getKey (str, counts) {
    for(let i = 0; i < str.length; i++) {
        counts[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
    }

    const key = counts.reduce((acc, item) => {
        return `${acc}${item}#`
    }, '#');

    counts.fill(0);

    return key;
}

