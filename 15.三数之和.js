/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b)
  const result = []
  const length = nums.length
  let addNum = 0
  for (let index = 1; index < length; index++) {
    let start = 0, end = length - 1
    if (index > 1 && nums[index] === nums[index - 1]) {
      start = index - 1
    }
    while (start < index && end > index) {
      if (start > 0 && nums[start] === nums[start - 1]) {
        start++
        continue
      }
      if (end < length - 1 && nums[end] === nums[end + 1]) {
        end--
        continue
      }
      addNum = nums[start] + nums[end] + nums[index]
      if (addNum === 0) {
        result.push([nums[start], nums[end], nums[index]])
        start++
        end--
      } else if (addNum > 0) {
        end--
      } else {
        start++
      }
    }
  }
  return result
};
// @lc code=end

