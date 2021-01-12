/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(root == null ) return 0;

    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return Math.max(left, right) + 1;
};

class Node {
    constructor(item) {
        this.data = item;
        this.left=this.right=null;
    }
}

let root;
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);

console.log("Mathdepth>>>", maxDepth(root));