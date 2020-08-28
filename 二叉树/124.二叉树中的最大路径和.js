/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function (root) {
  if (!root) return 0;
  let sum = root.val; //sum初始值是根节点val
  deep(root);
  return sum;

  function deep(root) {
    if (!root) return 0;
    let left = root.left ? deep(root.left) : 0;
    let right = root.right ? deep(root.right) : 0;

    // 处理负数
    left = left > 0 ? left : 0;
    right = right > 0 ? right : 0;

    sum = Math.max(left + right + root.val, sum);
    return Math.max(left, right) + root.val;
  }
};
// @lc code=end
