/*
9) Program to implement Queue operations using array
*/

class Queue {  
 constructor() {     
this.items = []; 
  } 
 
  // Add an element to the back of the queue   
 enqueue(element) {    
 this.items.push(element); 
  } 
 
  // Remove the first element from the queue and return it  
dequeue() {     
if (this.isEmpty())
{      
 return null;     
} 
    return this.items.shift(); 
  } 
 
  // Get the first element of the queue without removing it
front() {     
if (this.isEmpty()) {      
 return null; 
    }    
 return this.items[0]; 
  } 
 
  // Get the last element of the queue without removing it  
rear() {
if (this.isEmpty()) {       
return null; 
    } 
    return this.items[this.items.length - 1]; 
  } 
 
  // Check if the queue is empty   
    isEmpty() {     
return this.items.length === 0; 
  } 
 
  // Get the size of the queue   
    getSize() {     
return this.items.length; 
  } 
 
  // Clear the queue  
    clear() {     
this.items = []; 
  } 
} 
 
// Usage example: 
const queue = new Queue(); 
queue.enqueue(1); 
queue.enqueue(2); 
queue.enqueue(3); 
console.log(queue.front()); 
// Output: 1 
console.log(queue.dequeue()); 
// Output: 1
 console.log(queue.getSize()); 
// Output: 2
 queue.clear(); 
console.log(queue.isEmpty());
