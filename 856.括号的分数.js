/*
 * @lc app=leetcode.cn id=856 lang=javascript
 *
 * [856] 括号的分数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var fullParentheses = function(s) {
  const parentheses = []
  let i = 0
  for (; i < s.length; i++) {
    if (s[i] === '(') {
      parentheses.push(')')
    } else if (s[i] === ')' && parentheses.length !== 0) {
      parentheses.shift(0)
    } else if (s[i] === ')' && parentheses.length === 0) {
      break   
    }
  }
  return i
}

var scoreOfParentheses = function(s) {
  let val = 0
  let flag = false
  for (let i = 0; i < s.length; i++) {
    if (!flag && s[i] === '(') {
      flag = true
      val = val + 1
    } else if (flag && s[i] === '(') {
      const sIndex = fullParentheses(s.slice(i))
      val = (val - 1) + 2 * (scoreOfParentheses(s.slice(i, i + sIndex)) || 1)
      i = i + sIndex
      flag = false
    } else if (flag && s[i] === ')') {
      flag = false
      continue
    }
  }
  return val
};

// console.log(scoreOfParentheses('(())()()'));
// @lc code=end

