/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    
    while(left <= right){
        pivot = Math.floor((left+right)/2);
        if(target==nums[pivot]) return pivot;
        else if(target > nums[pivot]){
            left = pivot+1;
        }else{
            right = pivot-1;
        }
    }
    
    return -1;
};
