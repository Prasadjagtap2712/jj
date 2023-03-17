/*
8) Program to implement stack operations using linked list.
*/

class Node {
constructor(data) {
this.data = data;
this.next = null;
}
}
class Stack {
constructor() {
this.top = null;
this.size = 0;
}
// Push an element to the top of the stack
push(element) {
const node = new Node(element);
node.next = this.top;
this.top = node;
this.size++;
}
// Pop an element from the top of the stack and return it
pop() {
if (!this.top) {
return null;
}
const data = this.top.data;
this.top = this.top.next;
this.size--;
return data;}
// Return the element at the top of the stack without removing it
peek() {
if (!this.top) {
return null;
}
return this.top.data;
}
// Check if the stack is empty
isEmpty() {
return this.size === 0;
}
// Return the number of elements in the stack
getSize() {
return this.size;
}
// Print the elements in the stack
print() {
let current = this.top;
const elements = [];
while (current) {
elements.push(current.data);
current = current.next;
}
console.log(elements.join(' '));
}
}// Test the Stack class
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Stack after pushing 1, 2, 3:");
stack.print();
stack.pop();
console.log("Stack after popping:");
stack.print();
console.log("Element at the top of the stack:", stack.peek());
console.log("Is the stack empty?", stack.isEmpty());
console.log("Size of the stack:", stack.getSize());
