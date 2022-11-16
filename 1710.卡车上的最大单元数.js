/*
 * @lc app=leetcode.cn id=1710 lang=javascript
 *
 * [1710] 卡车上的最大单元数
 */

// @lc code=start
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1])
  let res = 0
  let i = 0
  while (truckSize > 0) {
    const [size, count] = boxTypes[i]
    if (size < truckSize) {
      res += size * count
      truckSize -= size
    } else {
      res += truckSize * count
      truckSize = 0
    }
    i += 1
    if (i >= boxTypes.length) return res
  }
  return res
};
// @lc code=end

