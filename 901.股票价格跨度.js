/*
 * @lc app=leetcode.cn id=901 lang=javascript
 *
 * [901] 股票价格跨度
 */

// @lc code=start

var StockSpanner = function() {
  this.i = -1
  this.prices = [[-1, Number.MAX_VALUE]]
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  this.i += 1
  while (price >= this.prices[this.prices.length - 1][1]) {
    this.prices.pop()
  }
  let ret = this.i - this.prices[this.prices.length - 1][0]
  this.prices.push([this.i, price])
  return ret
};

const stock = new StockSpanner()
for (let i = 1; i <= 109193; i++) {
  console.log(stock.next(i));
}
// console.log(stock.next(1));
// console.log(stock.next(2));
// console.log(stock.next(3));
// console.log(stock.next(4));
// console.log(stock.i, stock.prices);


/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
// @lc code=end

