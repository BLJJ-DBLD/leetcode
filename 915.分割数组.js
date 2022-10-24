/*
 * @lc app=leetcode.cn id=915 lang=javascript
 *
 * [915] 分割数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function(nums) {
  let i = 0
  let max = nums[i]
  let n = nums.length
  for (let j = n - 1; j > i; j--) {
    if (max > nums[j]) {
      max = Math.max(max, ...nums.slice(i, j))
      i = j
      j = n
    }

  }
  return i + 1
};

// console.log(partitionDisjoint([90,47,69,10,43,92,31,73,61,97]));
// @lc code=end

