/*
10) Program to implement stack operations using array container method*/

class Stack {
constructor() {
this.items = [];
}
// Push an element to the top of the stack
push(element) {
this.items.push(element);
}
// Pop an element from the top of the stack and return it
pop() {
if (this.items.length === 0) {
return null;
}
return this.items.pop();
}
// Return the element at the top of the stack without removing it
peek() {
return this.items[this.items.length - 1];
}
// Check if the stack is empty
isEmpty() {
return this.items.length === 0;
}
// Return the number of elements in the stack
size() {
return this.items.length;}
// Print the elements in the stack
print() {
console.log(this.items.join(' '));
}
}
// Test the Stack class
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
console.log("Is the stack empty?", stack.isEmpty())
console.log("Size of the stack:", stack.size());
