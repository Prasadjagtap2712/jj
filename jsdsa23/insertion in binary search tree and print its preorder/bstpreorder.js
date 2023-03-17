/*
15) JavaScript code to implement the insertion in binary search tree and print its preorder.
*/

class Node {
constructor(val) {
this.val = val;
this.left = null;
this.right = null;
}
}
class BST {
constructor() {
this.root = null;
}
// helper function to insert node recursively
insertHelper(root, val) {
if (!root) {
return new Node(val);
}
if (val < root.val) {
root.left = this.insertHelper(root.left, val);
} else {
root.right = this.insertHelper(root.right, val);
}
return root;
}
// insert node in binary search tree
insert(val) {
this.root = this.insertHelper(this.root, val);
}
// preorder traversal: root -> left -> right
preorder(root = this.root) {
if (!root) {return;
}
console.log(root.val);
this.preorder(root.left);
this.preorder(root.right);
}
}
// test the BST class
const bst = new BST();
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);
bst.insert(4);
bst.insert(7);
bst.insert(13);
console.log("Preorder traversal:");
bst.preorder();
