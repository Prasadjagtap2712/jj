/*
11) Program to sort elements using operations using linked List.
*/

class Node {
constructor(data) {
this.data = data;
this.next = null;
}
}
class LinkedList {
constructor() {
this.head = null;
}
// Insert a node at the beginning of the linked list
insertAtBeginning(data) {
const newNode = new Node(data);
newNode.next = this.head;
this.head = newNode;
}
// Insert a node at the end of the linked list
insertAtEnd(data) {
const newNode = new Node(data);
if (!this.head) {
this.head = newNode;
return;
}
let current = this.head;
while (current.next) {
current = current.next;
}current.next = newNode;
}
// Sort the linked list in ascending order
sort() {
if (!this.head) {
return;
}
let current = this.head;
let index = null;
while (current) {
index = current.next;
while (index) {
if (current.data > index.data) {
const temp = current.data;
current.data = index.data;
index.data = temp;
}
index = index.next;
}
current = current.next;
}
}
// Print the elements in the linked list
print() {
let current = this.head;const elements = [];
while (current) {
elements.push(current.data);
current = current.next;
}
console.log(elements.join(' '));
}
}
// Test the LinkedList class
const linkedList = new LinkedList();
linkedList.insertAtEnd(3);
linkedList.insertAtEnd(1);
linkedList.insertAtEnd(2);
console.log("Linked list before sorting:");
linkedList.print();
linkedList.sort();
console.log("Linked list after sorting:");
linkedList.print();
