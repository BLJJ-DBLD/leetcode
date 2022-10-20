/*
 * @lc app=leetcode.cn id=779 lang=javascript
 *
 * [779] 第K个语法符号
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

var kthGrammar = function(n, k) {
  let tmp = '01' // i = 1
  if (k <= 2) return k - 1
  let half = Math.pow(2, n - 1) / 2
  let rever = false
  while (k >= 2) {
    if (k > half) {
      k = k - half
      rever = !rever
    }
    n -= 1
    half = Math.pow(2, n - 1) / 2
  }
  // console.log(n, k, rever);
  return rever ? Math.abs(tmp[k - 1] - 1) : tmp[k - 1]
};

// console.log(kthGrammar(4, 4));
// @lc code=end

