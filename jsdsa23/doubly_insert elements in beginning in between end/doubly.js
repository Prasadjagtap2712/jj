/*
4) Program to insert elements in beginning, in between, end and delate from beginning, in between
and end from doubly linked List
*/

// Define the Node class
class Node {
constructor(value) {
this.value = value;
this.next = null;
this.prev = null;
}
}
// Define the DoublyLinkedList class
class DoublyLinkedList {
constructor() {
this.head = null;
this.tail = null;
}
// Add a new node to the beginning of the linked list
prepend(value) {
const newNode = new Node(value);
if (!this.head) {
this.head = newNode;
this.tail = newNode;
} else {
newNode.next = this.head;
this.head.prev = newNode;
this.head = newNode;
}
}// Add a new node to the end of the linked list
append(value) {
const newNode = new Node(value);
if (!this.head) {
this.head = newNode;
this.tail = newNode;
} else {
newNode.prev = this.tail;
this.tail.next = newNode;
this.tail = newNode;
}
}
// Add a new node after a specified node in the linked list
insertAfter(node, value) {
const newNode = new Node(value);
if (!node) {
return;
}
newNode.next = node.next;
newNode.prev = node;
node.next = newNode;
if (node === this.tail) {
this.tail = newNode;
} else {
newNode.next.prev = newNode;
}
}// Remove the first node from the linked list
removeHead() {
if (!this.head) {
return;
}
const removedNode = this.head;
if (this.head === this.tail) {
this.head = null;
this.tail = null;
} else {
this.head = this.head.next;
this.head.prev = null;
}
return removedNode;
}
// Remove the node after a specified node in the linked list
removeAfter(node) {
if (!node || !node.next) {
return;
}
const removedNode = node.next;
if (node.next === this.tail) {
this.tail = node;
} else {
node.next.next.prev = node;
}node.next = node.next.next;
return removedNode;
}
// Remove the last node from the linked list
removeTail() {
if (!this.tail) {
return;
}
const removedNode = this.tail;
if (this.head === this.tail) {
this.head = null;
this.tail = null;
} else {
this.tail = this.tail.prev;
this.tail.next = null;
}
return removedNode;
}
}
// Create a new linked list
const list = new DoublyLinkedList();
// Add some nodes to the linked list
list.append(1);
list.append(2);
list.append(4);// Insert a new node at the beginning of the linked list
list.prepend(0);
// Insert a new node after the second node in the linked list
const node = list.head.next;
list.insertAfter(node, 3);
// Remove the first node from the linked list
list.removeHead();
// Remove the third node from the linked list
const node2 = list.head.next;
list.removeAfter(node2);
// Remove the last node from the linked list
list.removeTail();
// Print the values of the nodes in the linked
