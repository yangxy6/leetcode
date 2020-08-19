/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 * 75/75 cases passed (100 ms)
 * Your runtime beats 28.96 % of javascript submissions
 * Your memory usage beats 66.18 % of javascript submissions (41.6 MB)
 */
var isValidBST = function (root) {

  return isBst(root, null, null)

  function isBst(root, min, max) {
    if (root === null) return true
    if (min && root.val <= min.val) return false
    if (max && root.val >= max.val) return false

    return isBst(root.left, min, root) && isBst(root.right, root, max)
  }

};
// @lc code=end