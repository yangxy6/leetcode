/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 * 68/68 cases passed (92 ms)
 * Your runtime beats 14.66 % of javascript submissions
 * Your memory usage beats 52.1 % of javascript submissions (37.8 MB)
 * 中序遍历-递归版
 */
var inorderTraversal = function (root) {
  let result = [];
  traversal(root);
  return result;

  function traversal(root) {
    if (root === null) return;
    traversal(root.left);
    result.push(root.val);
    traversal(root.right);
  }
};

// @lc code=end
