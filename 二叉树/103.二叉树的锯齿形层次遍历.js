/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let queue = [];
  queue.push(root);
  let ret = [];
  let level = 1;
  while (queue.length) {
    let count = queue.length;
    let tmp = [];
    while (count > 0) {
      let node = queue.shift();
      level % 2 ? tmp.push(node.val) : tmp.unshift(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      count--;
    }
    ret.push(tmp);
    level++;
  }
  return ret;
};
// @lc code=end
