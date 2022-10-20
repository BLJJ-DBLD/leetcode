/*
 * @lc app=leetcode.cn id=902 lang=javascript
 *
 * [902] 最大为 N 的数字组合
 */

// @lc code=start
/**
 * @param {string[]} digits
 * @param {number} n
 * @return {number}
 */
var atMostNGivenDigitSet = function(digits, n) {
  const nStr = String(n)
  const nStrL = nStr.length
  const dL = digits.length
  let sum = 0
  let i = 0
  const maxL = []
  while (i < nStrL) {
    const curNStr = nStr[i]
    const filterNL = digits.filter(n => n < curNStr)
    sum += Math.pow(dL, nStrL - i - 1)
    i += 1
  }
  
  return sum
};

// console.log(atMostNGivenDigitSet(["7"], 8));
console.log(atMostNGivenDigitSet(["1","3","5","7"], 100));
// @lc code=end
