/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b) // 从小到大排序
  let res = 0, diff = Number.MAX_VALUE, len = nums.length
  for (let i = 0; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    let start = i + 1, end = len - 1
    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end]
      if (Math.abs(sum - target) < diff) {
        res = sum
        diff = Math.abs(sum - target)
      }
      if (sum === target) {
        return res
      } else if (sum > target) {
        end--
      } else {
        start++
      }
    }
  }
  return res
};
// @lc code=end

