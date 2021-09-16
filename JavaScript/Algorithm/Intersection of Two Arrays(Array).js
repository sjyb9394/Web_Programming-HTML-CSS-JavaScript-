/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let store = nums1.reduce((map,n)=>{
        map[n] = (map[n]+1) || 1;
        return map;
    },{});
    
    return nums2.filter( value => !store[value] ? false: store[value]>0 ? store[value]-- : false);
};

