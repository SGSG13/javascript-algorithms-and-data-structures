/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const stack = [];
    const result = new Array(temperatures.length).fill(0);

    for(let i = 0; i < temperatures.length; i++) {
        while(stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            const top = stack.pop();
            result[top] = i - top;
        }
        stack.push(i);
    }

    return result;
};