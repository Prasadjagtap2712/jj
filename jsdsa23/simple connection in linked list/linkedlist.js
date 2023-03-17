/*
2) JAVASCRIPT Program to Demonstrate simple connection in linked list
*/
class Node {   
constructor(data) {   
this.data = data;     
this.next = null; 
  } 
} 
 
class LinkedList 
{   
constructor() 
{     
this.head = null;     
this.size = 0; 
  } 
    add(data) 
{     
const newNode = new Node(data); 
 
    if (!this.head) 
{       
this.head = newNode;     
}
 else 
{       
let current = this.head;      
 while (current.next) 
{         
current = current.next; 
      } 
      current.next = newNode; 
    } 
 
    this.size++; 
  } 
 
  
  print() {    
 let current = this.head;     
let str = "";     
while (current) 
{       
str += current.data + " -> ";       
current = current.next; 
    }    
 str += "null";    
 console.log(str); 
  } 
} 
 
 const list = new LinkedList(); 
 
 list.add(1);
 list.add(2); 
list.add(3);
 list.add(4); 
 

 list.print(); 

