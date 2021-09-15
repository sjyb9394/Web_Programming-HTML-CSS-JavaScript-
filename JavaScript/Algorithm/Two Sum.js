/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};
    
    for(let i = 0; i<nums.length; i++){
        let temp = target - nums[i];
        
        if(temp in map){
            return [map[temp], i];
        }else{
            map[nums[i]] = i;
        }
    }
};
