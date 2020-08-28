/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
var levelOrderBottom = function (root) {
  if (!root) return [];
  let queue = [];
  queue.push(root);
  let ret = [];
  while (queue.length) {
    let count = queue.length;
    let tmp = [];
    while (count > 0) {
      let node = queue.shift();
      tmp.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      count--;
    }
    ret.unshift(tmp);
  }
  return ret;
};
// @lc code=end
