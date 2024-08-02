/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function(jobDifficulty, d) {
    const n = jobDifficulty.length;
    if (n < d)  return -1;

    const memo = new Array(n).fill(null).map(() => new Array(d + 1).fill(-1));
    const hardestJobRemaining = [];
    let hardestJob = 0;

    for (let i = n - 1; i >= 0; i--) {
        hardestJob = Math.max(hardestJob, jobDifficulty[i]);
        hardestJobRemaining[i] = hardestJob;
    }

    function dp(i, day) {
        if (day == d) return hardestJobRemaining[i];
        
        if (memo[i][day] == -1) {
            let best = Infinity;
            let hardest = 0;
          
            for (let j = i; j < n - (d - day); j++) {
                hardest = Math.max(hardest, jobDifficulty[j]);
                best = Math.min(best, hardest + dp(j + 1, day + 1));
            }
            memo[i][day] = best;
        }
        
        return memo[i][day];
    }

    return dp(0, 1);
}   