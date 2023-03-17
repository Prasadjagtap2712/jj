/*
12) Javascript program to demonstrate insert operation in binary search tree
*/

class Node {
constructor(value) {
this.value = value;
this.left = null;
this.right = null;
}
}
class BinarySearchTree {
constructor() {
this.root = null;
}
// Insert a node with the given value into the binary search tree
insert(value) {
const newNode = new Node(value);
if (!this.root) {
this.root = newNode;
return this;
}
let current = this.root;
while (true) {
if (value === current.value) {
return undefined;
}
if (value < current.value) {
if (!current.left) {
current.left = newNode;
return this;
}
current = current.left;
} else {
if (!current.right) {current.right = newNode;
return this;
}
current = current.right;
}
}
}
}
// Test the BinarySearchTree class
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(17);
console.log(bst.root);
