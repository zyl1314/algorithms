## 题目描述
> 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶节点所在层到根节点所在的层，逐层从左向右遍历）

## 示例

```
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其自自底向上的层次遍历为：

[
  [15,7],
  [9,20],
  [3]
]
```
## 代码

```
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
var levelOrderBottom = function(root) {
    if (root == null) return [];
    let queue = [{node: root, level: 1}];
    let result = [];
    while(queue.length) {
        let now = queue.shift();
        
        if (result[now.level - 1]) {
            result[now.level - 1].push(now.node.val);
        } else {
            result[now.level - 1] = [now.node.val];
        }
        
        if (now.node.left) {
            queue.push({node: now.node.left, level: now.level + 1});
        } 
        if (now.node.right){
            queue.push({node: now.node.right, level: now.level + 1});
        }
    }
    
    return result.reverse();
};
```

## 思考
