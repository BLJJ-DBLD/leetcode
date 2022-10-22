/*
 * @lc app=leetcode.cn id=1235 lang=javascript
 *
 * [1235] 规划兼职工作
 */

// @lc code=start
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */

// 动态规划（找最优值） + 二分法（找到最后一个满足事件的兼职）

var jobScheduling = function(startTime, endTime, profit) {
  let n = startTime.length
  let jobs = new Array(n).fill(0).map((_, i) => [startTime[i], endTime[i], profit[i]])
  jobs.sort((a, b) => a[1] - b[1])
  const dp = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++) {
    const k = binarySearch(jobs, i - 1, jobs[i - 1][0])
    dp[i] = Math.max(dp[i - 1], dp[k] + jobs[i - 1][2])
  }
  console.log(dp);
  return dp[n]
};

var binarySearch = function(jobs, right, target) {
  let left = 0
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2)
    if (jobs[mid][1] > target) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}
// @lc code=end

