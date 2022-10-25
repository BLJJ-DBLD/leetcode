/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
// 回溯算法 & 动态规划

// 动态规划

// 判断回文
var check = function(s, begin, end) {
  for (let i = begin, j = end; i < j; i++, j--) {
    if (s[i] !== s[j]) {
      return false
    }
  }
  return true
}


var partition = function(s) {
  let path = [] // 单一结果
  let res = [] //符合要求的结果
  const backtracing = (startIndex) => {
    if (startIndex >= s.length) return res.push([...path])
    for (let i = startIndex; i < s.length; i++) {
      if (!check(s, startIndex, i)) {
        continue
      } else {
        path.push(s.slice(startIndex, i + 1))
        backtracing(i + 1)
        path.pop()
      }
    }
  }
  backtracing(0)
  return res
};
// @lc code=end

