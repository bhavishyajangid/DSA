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
LinkedList.addLast(1)   // this is the last element
LinkedList.addLast(2)
LinkedList.addLast(3)
LinkedList.addLast(4)
LinkedList.addLast(5)
LinkedList.addLast(6)   // the last node is the head 
// LinkedList.addLast(70)
// LinkedList.removeLast()
// LinkedList.print()




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

    3. //     Given the head of a linked list, the task is to find the middle. For example, the middle of 1-> 2->3->4->5 is 3. If there are two middle nodes (even count), return the second middle. For example, middle of 1->2->3->4->5->6 is 4.

// Examples:

// Input: Linked list: 1->2->3->4->5
// Output: 3

// Explanation: The given linked list is 1->2->3->4->5 and its middle is 3.
// Input: Linked list: 2->4->6->7->5->1
// Output: 7 

// Explanation: The given linked list is 2->4->6->7->5->1 and its middle is 7.

  // this is my approach 
   getMiddle(head) {
    if (head === null) return -1;

    let mid = Math.floor(this.size(head) / 2); // mid = 3 for 6 nodes
    let current = head;

    for (let i = 0; i < mid; i++) {
        current = current.next;
    }

    return current.data;
}

size(head) {
    let count = 0;
    let current = head;

    while (current !== null) {
        count++;
        current = current.next;
    }

    return count;
}

  // this is more optmisied approach 

//   getMiddle(head) {
//     if (head === null) return -1;

//     let slow = head;
//     let fast = head;

//     while (fast !== null && fast.next !== null) {
//         slow = slow.next;
//         fast = fast.next.next;
//     }

//     return slow.data;
// }


4. // Given a singly linked list. The task is to remove duplicates (nodes with duplicate values) from the given list (if it exists).
// Note: Try not to use extra space. The nodes are arranged in a sorted way.

// Examples:

// Input:
// LinkedList: 2->2->4->5
// Output: 2 -> 4 -> 5

// Explanation: In the given linked list 2 -> 2 -> 4 -> 5, only 2 occurs more than 1 time. So we need to remove it once.

 removeDuplicates(head) {
        // your code here
        if(head == null) return head

        let current = head

        
        while(current !== null && current.next !== null){
            console.log(current.data , current.next.data);
            
            if(current.data == current.next.data){
                current.next = current.next.next
            }else{
                current = current.next
            }
        }
        return head
    }


    5. //     You are given the head of a linked list and the number k, You have to return the kth node from the end of linkedList. If k is more than the number of nodes, then the return -1.

// Examples

// Input: LinkedList: 1->2->3->4->5->6->7->8->9, k = 2
// Output: 8
// Explanation: The given linked list is 1->2->3->4->5->6->7->8->9. The 2nd node from end is 8.

// this is my approach
 getKthFromLast(head, k) {
        // code here
        let current = head 
        if(k > this.size(head)) return -1

        let lastIndex = this.size(head) - k

       
        for (let i = 0; i < lastIndex; i++) {
           current = current.next
        }

        return current.data
         
    }

    // this is more optmised approach
    // getKthFromLast(head, k) {
    //     if (head === null || k <= 0) return -1;

    //     let fast = head;
    //     let slow = head;

    //     // Move fast k steps ahead
    //     for (let i = 0; i < k; i++) {
    //         if (fast === null) return -1; // k > size
    //         fast = fast.next;
    //     }

    //     // Move both until fast reaches the end
    //     while (fast !== null) {
    //         slow = slow.next;
    //         fast = fast.next;
    //     }

    //     return slow.data;
    // }

 deleteNode(head, index) {
        // code here

         if(index == 0){
             head = head.next
             return
         }

         let current = head

         for (let i = 1; i < index-1 ; i++) {
              current = current.next
         }
        
        
         if(current.next){
            current.next = current.next.next
         }
         return head
    }

}

const result = new Solution()
// console.log(result.isPalindrome(LinkedList.head));

// console.log(result.reverseList(LinkedList.head));
// console.log(result.getMiddle(LinkedList.head));
// console.log(result.removeDuplicates(LinkedList.head));
// console.log(result.getKthFromLast(LinkedList.head , 2));
console.log(result.deleteNode(LinkedList.head , 2));


