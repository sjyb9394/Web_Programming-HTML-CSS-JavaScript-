/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length == 1) return nums[0];
    if(nums.length == 2) return Math.max(nums[0], nums[1]);
    let maxProfit = Array(nums.length).fill(0);
    maxProfit[0] = nums[0];
    maxProfit[1] = Math.max(nums[0], nums[1]);
    
    for(let i = 2; i<nums.length; i++){
        maxProfit[i] = Math.max(maxProfit[i-2]+nums[i], maxProfit[i-1]);
    }
    
    return maxProfit[maxProfit.length-1];
};
