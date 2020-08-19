/*
85/85 cases passed (148 ms)
Your runtime beats 5.92 % of javascript submissions
Your memory usage beats 40.74 % of javascript submissions (46.5 MB)
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {

  if (root === null) return root
  if (root.val === key) {
    if (root.left === null) return root.right
    if (root.right === null) return root.left
    // 中间节点
    let target = findMin(root.right) //右侧树最左侧节点
    target.left = root.left
    return root.right
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key)
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key)
  }
  return root
};

function findMin(root) {
  while (root.left !== null) {
    root = root.left
  }
  return root
}
// @lc code=end