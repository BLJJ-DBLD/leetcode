/*
 * @lc app=leetcode.cn id=1678 lang=javascript
 *
 * [1678] 设计 Goal 解析器
 */

// @lc code=start
/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
  const map = {
    G: 'G',
    '()': 'o',
    '(al)': 'al'
  }
  res = ''
  for (let i = 0; i < command.length; i++) {
    for (let j = i + 1; j <= command.length; j++) {
      const str = command.slice(i, j)
      if (map[str]) {
        res += map[str]
        i = j - 1
        break
      }
    }
  }
  return res
};

console.log(interpret("(al)G(al)()()G"));
// @lc code=end

