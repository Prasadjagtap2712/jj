/*
14) JavaScript program to demonstrate preorder , postorder and inorder traversal in tree
*/

class Node {
constructor(val) {
this.val = val;
this.left = null;
this.right = null;
}
}
class BinaryTree {
constructor() {
this.root = null;
}
// insert a node into the tree
insert(val) {
const node = new Node(val);
if (!this.root) {
this.root = node;
} else {
this.insertNode(this.root, node);
}
}
insertNode(root, node) {
if (node.val < root.val) {
if (!root.left) {
root.left = node;
} else {
this.insertNode(root.left, node);
}} else {
if (!root.right) {
root.right = node;
} else {
this.insertNode(root.right, node);
}
}
}
// preorder traversal: root -> left -> right
preorder(root = this.root) {
if (root) {
console.log(root.val);
this.preorder(root.left);
this.preorder(root.right);
}
}
// inorder traversal: left -> root -> right
inorder(root = this.root) {
if (root) {
this.inorder(root.left);
console.log(root.val);
this.inorder(root.right);
}
}
// postorder traversal: left -> right -> root
postorder(root = this.root) {
if (root) {
this.postorder(root.left);
this.postorder(root.right);
console.log(root.val);}
}
}
// Test the BinaryTree class
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(12);
tree.insert(20);
console.log("Preorder traversal:");
tree.preorder();
console.log("Inorder traversal:");
tree.inorder();
console.log("Postorder traversal:");
tree.postorder();
