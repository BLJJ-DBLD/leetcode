/*
 * @lc app=leetcode.cn id=801 lang=javascript
 *
 * [801] 使序列递增的最小交换次数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var checkNums = function(nums) {
  let flag = true
  nums.reduce(function (prev, cur, index) {
    // console.log(prev, cur, index); 
    if (flag) {
      flag = cur > prev
    }
    return cur
  })
  return flag
 }

 var minSwap = function(nums1, nums2) {
  let count = 0
  let prev = 0
  let cur = 1
  let next = 2
  let length = nums1.length
  while (cur < length) {
    const diffPrev1 = nums1[prev] - nums1[cur]
    const diffNext1 = nums1[cur] - nums1[next]
    const diffPrev2 = nums2[prev] - nums2[cur]
    const diffNext2 = nums2[cur] - nums2[next]
    if (!((diffPrev1 < 0 && (isNaN(diffNext1) ? true : diffNext1 < 0)) 
        && (diffPrev2 < 0 && (isNaN(diffNext2) ? true : diffNext2 < 0)))) {
      const tem1 = nums1[cur]
      const tem2 = nums2[cur]
      nums1[cur] = tem2
      nums2[cur] = tem1
      count += 1
      // console.log('触发', nums1, nums2);
      if (checkNums(nums1) && checkNums(nums2)) {
        break
      }
    }
    cur += 1
    prev = cur - 1
    next = cur + 1
  }
  return count
};

// console.log(minSwap([0,4,4,5,9],[0,1,6,8,10]));
// @lc code=end

