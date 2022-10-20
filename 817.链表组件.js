/*
 * @lc app=leetcode.cn id=817 lang=javascript
 *
 * [817] 链表组件
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function(head, nums) {
  let cur = 0
  let flag = false
  while(head !== null && nums.length > 0) {
    if (nums.includes(head.val)) {
      nums.splice(nums.findIndex(num => num === head.val), 1)
      head = head.next
      flag = true
      cur += 1
      while (flag && head !== null) {
        if (nums.includes(head.val)) {
          nums.splice(nums.findIndex(num => num === head.val), 1)
          head = head.next
        } else {
          head = head.next
          flag = false
        }
      }
    } else {
      head = head.next
    }
  }
  return cur
};

// console.log(numComponents([0,1,2,3], [0,1,3]));
// @lc code=end

