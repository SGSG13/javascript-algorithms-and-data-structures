/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
    const groups = new Map();

    for(let i = 0; i < strings.length; i++) {
      let key = ''

      for(let j = 1; j < strings[i].length; j++) {
            const diff = (strings[i].charCodeAt(j) - strings[i].charCodeAt(j-1) + 26) % 26;
            key += diff + '-';
       }

       if (groups.has(key)) {
        groups.get(key).push(strings[i]);
       } else {
        groups.set(key, [strings[i]]);
       }
    }

    return new Array(...groups.values())
};
