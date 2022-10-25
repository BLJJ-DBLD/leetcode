/*
 * @lc app=leetcode.cn id=934 lang=javascript
 *
 * [934] 最短的桥
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */

// 广度搜索法

var shortestBridge = function(grid) {
  const n = grid.length
  const dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]] // 岛屿点的上下左右四个坐标
  const island = []
  const queue = []

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        queue.push([i, j])
        grid[i][j] = -1 // 标记这个点是已发现的岛屿
        while (queue.length !== 0) {
          const cell = queue.shift()
          let x = cell[0], y = cell[1]
          island.push(cell)
          // 上下左右
          for (let k = 0; k < 4; k++) {
            let nx = x + dirs[k][0]
            let ny = y + dirs[k][1]
            if (nx >= 0 && ny >= 0 && nx < n && ny < n && grid[nx][ny] === 1) {
              queue.push([nx, ny])
              grid[nx][ny] = -1
            }
          }
        }
        // 至此找到这个岛屿的所有坐标点了
        for (const cell of island) {
          queue.push(cell)
        }
        // 定义广度
        let step = 0
        while (queue.length !== 0) {
          const sz = queue.length
          for (let k = 0; k < sz; k++) {
            const cell = queue.shift()
            let x = cell[0], y = cell[1]
            for (let d = 0; d < 4; d++) {
              let nx = x + dirs[d][0]
              let ny = y + dirs[d][1]
              if (nx >= 0 && ny >= 0 && nx < n && ny < n) {
                if (grid[nx][ny] === 0) {
                  // 搜索到的外域
                  queue.push([nx, ny])
                  grid[nx][ny] = -1
                } else if (grid[nx][ny] === 1) {
                  // 摸索到另一座岛屿了
                  return step
                }
              }
            }
          }
          step++
        }
      }
    }
  }
  return 0
};
// @lc code=end

