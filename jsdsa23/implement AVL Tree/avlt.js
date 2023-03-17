/*
19) JavaScript program to implement AVL Tree
*/

class AVLNode {
constructor(value) {
this.value = value;
this.height = 1;
this.left = null;
this.right = null;
}
}
class AVLTree {
constructor() {
this.root = null;
}
insert(value) {
this.root = this._insert(this.root, value);
}
_insert(node, value) {
if (!node) {
return new AVLNode(value);
}
if (value < node.value) {
node.left = this._insert(node.left, value);
} else {
node.right = this._insert(node.right, value);
}
node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right))
const balance = this._getBalance(node);
if (balance > 1 && value < node.left.value) {
return this._rotateRight(node);
}
if (balance < -1 && value > node.right.value) {
return this._rotateLeft(node);}
if (balance > 1 && value > node.left.value) {
node.left = this._rotateLeft(node.left);
return this._rotateRight(node);
}
if (balance < -1 && value < node.right.value) {
node.right = this._rotateRight(node.right);
return this._rotateLeft(node);
}
return node;
}
_rotateRight(node) {
const newRoot = node.left;
const temp = newRoot.right;
newRoot.right = node;
node.left = temp;
node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
newRoot.height = 1 + Math.max(this._getHeight(newRoot.left), this._getHeight(newRoot.right));
return newRoot;
}
_rotateLeft(node) {
const newRoot = node.right;
const temp = newRoot.left;
newRoot.left = node;
node.right = temp;
node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
newRoot.height = 1 + Math.max(this._getHeight(newRoot.left), this._getHeight(newRoot.right));
return newRoot;
}
_getHeight(node) {
if (!node) {
return 0;
}return node.height;
}
_getBalance(node) {
if (!node) {
return 0;
}
return this._getHeight(node.left) - this._getHeight(node.right);
}
print() {
this._print(this.root);
}
_print(node) {
if (node) {
console.log(`${node.value} (height: ${node.height})`);
this._print(node.left);
this._print(node.right);
}
}
}
const tree = new AVLTree();
tree.insert(10);
tree.insert(20);
tree.insert(40);
tree.insert(50);
tree.insert(25);
tree.print();
