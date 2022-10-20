/*
 * @lc app=leetcode.cn id=1700 lang=javascript
 *
 * [1700] 无法吃午餐的学生数量
 */

// @lc code=start
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
  let hasLike = []
  let sandL = sandwiches.length
  for (let j = 0; j < sandL; j++) {
    const curSW = sandwiches[j]
    const findStudent = students.findIndex((t, index) => {
      if (t === curSW && !hasLike.includes(index)) {
        hasLike.push(index)
        return true
      }
      return false
    })
    if (findStudent === -1) {
      return sandL - hasLike.length
    }
  }
  return 0
};
// @lc code=end

