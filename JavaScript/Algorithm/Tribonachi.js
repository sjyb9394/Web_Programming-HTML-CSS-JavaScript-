/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let f = [0,1,1];
    
    for(let i = 3; i<=n; i++){
        f[i%3] = f[0]+f[1]+f[2];
    }
    
    return f[n%3];
};
