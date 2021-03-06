/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  return deep(root) + 1; //+1是包含root节点

  function deep(root) {
    if (!root) return -1;
    let left = root.left ? deep(root.left) + 1 : 0;
    let right = root.right ? deep(root.right) + 1 : 0;

    return Math.max(left, right);
  }
};
// @lc code=end
