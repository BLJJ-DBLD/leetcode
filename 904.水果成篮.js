/*
 * @lc app=leetcode.cn id=904 lang=javascript
 *
 * [904] 水果成篮
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
  if (fruits.length <= 2) return fruits.length
  let max = 0
  let cur = 0
  let L = fruits[0]
  let R = -1
  let RIndex = 1
  for (let i = RIndex; i < fruits.length; i++) {
    console.log(i);
    if (fruits[i] !== L && (R !== -1 && fruits[i] !== R)) {
      max = Math.max(max, cur)
      L = R
      R = -1
      cur = 0
      i = RIndex
      // console.log({L, R, cur, i, max});
      if (max > (fruits.length - i)) {
        // console.log(max, (fruits.length - i));
        break
      }
    } else if (fruits[i] !== L && (R === -1)) {
      R = fruits[i]
      cur += 1
      RIndex = i
    } else if (fruits[i] === L || fruits[i] === R) {
      cur += 1
    }
  }
  return Math.max(max, cur) + 1
};

console.log(totalFruit([3,3,3,1,2,1,1,2,3,3,4]));
// @lc code=end

