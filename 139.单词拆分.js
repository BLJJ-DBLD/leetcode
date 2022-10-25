/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// 动态规划

// 公式转换成 dp[i] = dp[j] && check(s[j, i - 1])

var wordBreak = function(s, wordDict) {
  const n = s.length
  const wordDictSet = new Set(wordDict)
  const dp = new Array(n + 1).fill(false)
  dp[0] = true
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDictSet.has(s.slice(j, i))) {
        dp[i] = true
        break
      }
    }
  }
  return dp[n]
};

// @lc code=end

