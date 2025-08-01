// **************************** LINKLIST **********************

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null
    }

    addFirst(data){
      const newNode = new Node(data)    // make a new node 
        newNode.next = this.head    // set the current head next value to new node   
        this.head = newNode  // make head to the newnode 
     }

     addLast(data){
        const newNode = new Node(data)   // create a new node

        if(!this.head){               // if linklist is empty so the this element is the last or fast make it head
            this.head = newNode
            return 
        }

        let current = this.head          // this is head means first element in the linkedlist

        while(current.next){              // start from head and go to the last element and we know the last elemnt next is null because there is not node present after this node so when the current .next is null then we know the last element is the current so we create the last element 
            current = current.next
        }

        current.next = newNode    // make the last node

     }

     size(){
        let count = 0
        let current = this.head
        while(current){                 // start from head and if the node.next value is null then return the count which count the node value
            count++
            current = current.next
        }
        return count
     }

     addAt(index ,data){
         if(index < 0|| index > this.size()){
             console.error('Invalid Index')           // check the index is under the linklist size
             return
         }

         const newNode = new Node(data)    // create a new node

         if(index == 0){
            // if we need to add a node on the first of the linkedlist so we make the new node head and in this next we add the previosu head 
             newNode.next = this.head      
             this.head = newNode
             return
         }

         let current = this.head         

         // when we reach the previous node of the index wher after we need to add so first we add its next to the new node and then the newnode.next to the index next node 
         for (let i = 0; i < index - 1; i++) {      
              current = current.next
         }

         newNode.next = current.next   // this will point the next node of the index
         current.next = newNode  // this will point the previous node of the index and the newnode is the index 
     }


     removeTop(){
        if(!this.head){
            return
        }

        this.head = this.head.next   // make the next node to the head so the first head is removed
     }

     removeLast(){
        if(!this.head){
            return 
        }

        let current = this.head   

        // reach the second last node and mkae it next null 
        while(current.next.next){
            current = current.next
        }
        current.next = null
     }

     removeAt(index , data){
         if(index < 0|| index > this.size()){
             console.error('Invalid Index')
             return
         }

         

         if(index == 0){
             this.head = this.head.next
             return
         }

         let current = this.head

         for (let i = 0; i < index - 1; i++) {
              current = current.next
         }
        
         // reach the previous node and connect its next to the next of the removed node 
         if(current.next){
            current.next = current.next.next
         }
     }

     print(){
        let current = this.head
        while(current){
            console.log(current.data);
            current = current.next
        }
     }

}

const LinkedList = new linkedList()
LinkedList.addFirst(10)   // this is the last element
LinkedList.addFirst(20)
LinkedList.addFirst(30)   // the last node is the head 
LinkedList.addLast(40)
LinkedList.removeLast()
LinkedList.print()




1.  // Given a head singly linked list of positive integers. You have to check if the given linked list is palindrome or not.

// Examples:

// Input: head: 1 -> 2 -> 1 -> 1 -> 2 -> 1
// Output: true
// Explanation: The given linked list is 1 -> 2 -> 1 -> 1 -> 2 -> 1 , which is a palindrome and Hence, the output is true.

class Solution {
    isPalindrome(head) {
        // code here
        let str1 = ''
        let str2 = ''
        let node = head
        
        while(node !== null){
            str1 = `${str1}${node.data}`
            str2 = `${node.data}${str2}`
           node  = node.next
        }
        
        return str1 == str2
        
       
    }

    reverseList(head) {
        // code here
        let prev = null
        let current = head
        
        // NOTE ; - FOR MORE CLARIFICATION ASK FROM CHATGPT THIS WILL EXPALIN YOU VISUALY

        while(current !== null){
        const  newNode = current.next  // this will store the current next node value
         current.next = prev  // this will make the current next value to prev
         prev = current   // now the prev is the curret
         current = newNode  // current is the saved node 
        }
        return prev
    }
}

const result = new Solution()
// console.log(result.isPalindrome(LinkedList.head));

console.log(result.reverseList(LinkedList.head));


