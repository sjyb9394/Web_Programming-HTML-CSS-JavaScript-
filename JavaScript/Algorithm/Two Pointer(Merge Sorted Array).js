/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if(n==0) return;
    
//     let popping = nums1.length-m;
//     for(let i = 0; i<popping; i++){
//         nums1.pop();
//     }

//     for(let i= 0; i<n; i++){
//         nums1.push(nums2[i]);
//     }
//     nums1.sort((a,b)=>a-b);
    
    let count = m+n-1;
    m--,n--;
    while(count>=0){
        if(n<0||nums1[m]>nums2[n]){
            nums1[count] = nums1[m--];
        }else{
            nums1[count] = nums2[n--];
        }
        count--;
    }
};
