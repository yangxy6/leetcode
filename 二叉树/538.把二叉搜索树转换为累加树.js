/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 * 二叉搜索树，左边的小于root，右边的大于root
 * 左边=左边+root+right
 * root=root+right
 * right不变
 */

var convertBST = function (root) {
  let num = 0;
  return bst(root);
  function bst(root) {
    if (!root) return null;
    bst(root.right);
    root.val = root.val + num;
    num = root.val;
    bst(root.left);
    return root;
  }
};
// @lc code=end
