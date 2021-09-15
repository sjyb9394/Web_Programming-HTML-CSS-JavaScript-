/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let arr = Array(n+1).fill(0);
    
    arr[0] = 1;
    arr[1] = 2;
    
    for(let i = 2; i<=n; i++){
        arr[i] = arr[i-1]+arr[i-2];
    }
    
    return arr[n-1];
};
