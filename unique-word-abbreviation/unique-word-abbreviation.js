/**
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function(dictionary) {
    this.dic = new Map();

    if(dictionary.length) {
        for(let word of dictionary) {
            const abbr = this.getAbbr(word);
            this.dic.set(abbr, (this.dic.get(abbr) || new Set()).add(word));
        }
    }
};

ValidWordAbbr.prototype.getAbbr = function(word) {
    const length = word.length;

    if(length < 3) {
        return word;
    }

    return `${word.charAt(0)}${length - 2}${word.charAt(length - 1)}`;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
ValidWordAbbr.prototype.isUnique = function(word) {
    const abbr = this.dic.get(this.getAbbr(word));
    return abbr ? abbr.has(word) && abbr.size === 1  : true;
};

/** 
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = new ValidWordAbbr(dictionary)
 * var param_1 = obj.isUnique(word)
 */