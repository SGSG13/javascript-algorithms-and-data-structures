/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];

    for(let i = 0; i < tokens.length; i++) {
        const current = tokens[i];

        if (Number.isInteger(+current)) {
            stack.push(+current);
        } else {
            const b = stack.pop();
            const a = stack.pop();
            let sum = 0;

            if (current === '+') {
                sum = a + b;
            }
            if (current === '-') {
                sum = a - b;
            }
            if (current === '/') {
                sum = Math.trunc(a / b);
            }
            if (current === '*') {
                sum = a * b;
            }

            stack.push(sum);
        }
    }

    return stack.pop();
};