/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    const MOD = Math.pow(10, 9) + 7;
    
    if (n <= 2) {
        return n;
    }
    
    const f = new Array(n + 1).fill(0);
    const p = new Array(n + 1).fill(0);
    
    f[1] = 1;
    f[2] = 2;
    p[2] = 1;
    
    for (let k = 3; k <= n; ++k) {
        f[k] = (f[k - 1] + f[k - 2] + 2 * p[k - 1]) % MOD;
        p[k] = (p[k - 1] + f[k - 2]) % MOD;
    }
    
    return f[n]; 
};