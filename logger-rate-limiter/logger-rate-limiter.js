
var Logger = function() {
    this.timer = 10;
    this.map = new Map();
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (this.map.has(message) && timestamp < this.map.get(message)) {
       return false;
    }

    this.map.set(message, this.timer + timestamp)
    return true;
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */