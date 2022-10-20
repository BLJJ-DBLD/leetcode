/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let flag = false
  const m = matrix.length
  for (let i = 0; i < m; i++) {
    const nMax = matrix[i].length - 1
    if (matrix[i][0] <= target && matrix[i][nMax] >= target) {
      if (matrix[i].includes(target)) {
        return true
      }
    }
  }
  return flag
};

// @lc code=end

