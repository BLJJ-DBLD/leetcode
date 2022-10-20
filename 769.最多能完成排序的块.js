/*
 * @lc app=leetcode.cn id=769 lang=javascript
 *
 * [769] 最多能完成排序的块
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
  let m = 0, cur = 0
  for (let i = 0; i < arr.length; i++) {
    m = Math.max(arr[i], m)
    if (m === i) cur += 1
  }
  return cur
};
// @lc code=end

