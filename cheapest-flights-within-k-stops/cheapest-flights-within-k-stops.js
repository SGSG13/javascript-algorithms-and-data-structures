/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    let distances = new Array(n).fill(Infinity);
    distances[src] = 0;

    for(let i = 0; i <= k; i++) {
        const temp = [...distances];

        for(let [from, to, price] of flights) {
            if(distances[from] !== Infinity) {
                temp[to] = Math.min(temp[to], distances[from] + price);
            }
        }

        distances = [...temp];
    }

    return distances[dst] === Infinity ? -1 : distances[dst];
};