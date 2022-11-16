/*
 * @lc app=leetcode.cn id=775 lang=javascript
 *
 * [775] 全局倒置与局部倒置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isIdealPermutation = function(nums) {
  let max = 0
  for (let j = 2; j < nums.length; j++) {
    max = Math.max(max, nums[j - 2])
    if (max > nums[j]) return false
  }
  return true
};
// @lc code=end

