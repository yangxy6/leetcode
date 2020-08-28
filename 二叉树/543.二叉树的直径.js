/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function (root) {
  let sum = 0;
  deep(root);
  return sum;

  function deep(root) {
    // deep(root.left) + 1 已经+1 root是根节点时要-1
    if (!root) return -1;
    let left = root.left ? deep(root.left) + 1 : 0;
    let right = root.right ? deep(root.right) + 1 : 0;

    // sum是每个节点中left+right的最大值
    sum = Math.max(left + right, sum);
    // return是let left = root.left ? deep(root.left) + 1 : 0 其中left值
    return Math.max(left, right);
  }
};
// @lc code=end
