// **************************** LINKLIST **********************

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
  }

  addFirst(data) {
    const newNode = new Node(data); // make a new node
    newNode.next = this.head; // set the current head next value to new node
    this.head = newNode; // make head to the newnode
  }

  addLast(data) {
    const newNode = new Node(data); // create a new node

    if (!this.head) {
      // if linklist is empty so the this element is the last or fast make it head
      this.head = newNode;
      return;
    }

    let current = this.head; // this is head means first element in the linkedlist

    while (current.next) {
      // start from head and go to the last element and we know the last elemnt next is null because there is not node present after this node so when the current .next is null then we know the last element is the current so we create the last element
      current = current.next;
    }

    current.next = newNode; // make the last node
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      // start from head and if the node.next value is null then return the count which count the node value
      count++;
      current = current.next;
    }
    return count;
  }

  addAt(index, data) {
    if (index < 0 || index > this.size()) {
      console.error("Invalid Index"); // check the index is under the linklist size
      return;
    }

    const newNode = new Node(data); // create a new node

    if (index == 0) {
      // if we need to add a node on the first of the linkedlist so we make the new node head and in this next we add the previosu head
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;

    // when we reach the previous node of the index wher after we need to add so first we add its next to the new node and then the newnode.next to the index next node
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next; // this will point the next node of the index
    current.next = newNode; // this will point the previous node of the index and the newnode is the index
  }

  removeTop() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next; // make the next node to the head so the first head is removed
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    let current = this.head;

    // reach the second last node and mkae it next null
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  removeAt(index, data) {
    if (index < 0 || index > this.size()) {
      console.error("Invalid Index");
      return;
    }

    if (index == 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;

    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    // reach the previous node and connect its next to the next of the removed node
    if (current.next) {
      current.next = current.next.next;
    }
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const LinkedList = new linkedList();
LinkedList.addLast(10); // this is the last element
LinkedList.addLast(20);
LinkedList.addLast(30);
LinkedList.addLast(40);
LinkedList.addLast(50)
// LinkedList.addLast(0)   // the last node is the head
// LinkedList.addLast(2)
// LinkedList.addLast(2)
// LinkedList.removeLast()
// LinkedList.print()

const roughLinked = new linkedList();
roughLinked.addLast(0); // this is the last element
roughLinked.addLast(7);
// roughLinked.addLast(5)
// roughLinked.addLast(2)
// roughLinked.print()

1; // Given a head singly linked list of positive integers. You have to check if the given linked list is palindrome or not.

// Examples:

// Input: head: 1 -> 2 -> 1 -> 1 -> 2 -> 1
// Output: true
// Explanation: The given linked list is 1 -> 2 -> 1 -> 1 -> 2 -> 1 , which is a palindrome and Hence, the output is true.

class Solution {
  isPalindrome(head) {
    // code here
    let str1 = "";
    let str2 = "";
    let node = head;

    while (node !== null) {
      str1 = `${str1}${node.data}`;
      str2 = `${node.data}${str2}`;
      node = node.next;
    }

    return str1 == str2;
  }

  reverseList(head) {
    // code here
    let prev = null;
    let current = head;

    // NOTE ; - FOR MORE CLARIFICATION ASK FROM CHATGPT THIS WILL EXPALIN YOU VISUALY

    while (current !== null) {
      const newNode = current.next; // this will store the current next node value
      current.next = prev; // this will make the current next value to prev
      prev = current; // now the prev is the curret
      current = newNode; // current is the saved node
    }
    return prev;
  }

  3; //     Given the head of a linked list, the task is to find the middle. For example, the middle of 1-> 2->3->4->5 is 3. If there are two middle nodes (even count), return the second middle. For example, middle of 1->2->3->4->5->6 is 4.

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

  4; // Given a singly linked list. The task is to remove duplicates (nodes with duplicate values) from the given list (if it exists).
  // Note: Try not to use extra space. The nodes are arranged in a sorted way.

  // Examples:

  // Input:
  // LinkedList: 2->2->4->5
  // Output: 2 -> 4 -> 5

  // Explanation: In the given linked list 2 -> 2 -> 4 -> 5, only 2 occurs more than 1 time. So we need to remove it once.

  removeDuplicates(head) {
    // your code here
    if (head == null) return head;

    let current = head;

    while (current !== null && current.next !== null) {
      console.log(current.data, current.next.data);

      if (current.data == current.next.data) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
    return head;
  }

  5; //     You are given the head of a linked list and the number k, You have to return the kth node from the end of linkedList. If k is more than the number of nodes, then the return -1.

  // Examples

  // Input: LinkedList: 1->2->3->4->5->6->7->8->9, k = 2
  // Output: 8
  // Explanation: The given linked list is 1->2->3->4->5->6->7->8->9. The 2nd node from end is 8.

  // this is my approach
  getKthFromLast(head, k) {
    // code here
    let current = head;
    if (k > this.size(head)) return -1;

    let lastIndex = this.size(head) - k;

    for (let i = 0; i < lastIndex; i++) {
      current = current.next;
    }

    return current.data;
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

    if (index == 0) {
      head = head.next;
      return;
    }

    let current = head;

    for (let i = 1; i < index - 1; i++) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
    return head;
  }

  6; // Add Number Linked Lists
  // Difficulty: MediumAccuracy: 34.52%Submissions: 350K+Points: 4Average Time: 30m
  // Given head of two singly linked lists head1 and head2 representing two non-negative integers. The task is to return the head of the linked list representing the sum of these two numbers.

  // Note: There can be leading zeros in the input lists, but there should not be any leading zeros in the output list.

  // Examples:

  // Input: head1 = 4 -> 5, head2 = 3 -> 4 -> 5
  // Output:  3 9 0
  // Explanation: Given numbers are 45 and 345. There sum is 390.

  // THIS IS MY APPROACH
//   addTwoLists(head1, head2) {
//     // code here
//     // first store the linkedlist node into the string
//     const num1 = this.listToString(head1);
//     const num2 = this.listToString(head2);

//     // sum the both string number
//     const sum = BigInt(num1) + BigInt(num2);
//     const sumStr = sum.toString();
//   // again convert into linked list
//     return this.stringToList(sumStr);
//   }

//   listToString(head) {
//     let str = "";
//     while (head) {
//       str += head.data.toString();
//       head = head.next;
//     }
//     return str;
//   }

//   stringToList(numStr) {
//     let dummy = new Node(-1);
//     let current = dummy;
//     for (let char of numStr) {
//       current.next = new Node(parseInt(char));
//       current = current.next;
//     }
//     return dummy.next;
//   }


// THIS IS GOOD APPRAOCH 
   addTwoLists(head1 , head2){
     let dummy = new node(0)
     let current = dummy
     let carry = 0

     while(head1 !== null || head2 !== null ||carry > 0){
            let val1 = head1 ? head1.data : 0
            let val2 = head2 ? head2.data : 0

            let sum = val1 + val2 + carry
            carry = Math.floor(sum / 10)
            sum %=10

            current.next = new node(sum)
            current = current.next 

            if(head1) head1 = head1.next
            if(head2) head2 = head2.next
     }
       return dummy.next
      
   }

   7. //    * important Given the head of a linked list where nodes can contain values 0s, 1s, and 2s only. Your task is to rearrange the list so that all 0s appear at the beginning, followed by all 1s, and all 2s are placed at the end.

// Examples:

// Input: head = 1 → 2 → 2 → 1 → 2 → 0 → 2 → 2

// Output: 0 → 1 → 1 → 2 → 2 → 2 → 2 → 2

// Explanation: All the 0s are segregated to the left end of the linked list, 2s to the right end of the list, and 1s in between.

 segregate(head) {
        // code here
        let current = head
        let zeroHead = new Node(-1)  // create the node for 0 
        let oneHead = new Node(-1)   // create the node for 1
        let twoHead = new Node(-1)  // create the node for 2
        let zeroTail = zeroHead     // store its head this is current = head same 
        let oneTail = oneHead
        let twoTail = twoHead

        while(current){
          if(current.data == 0){
            // if the data is 0 then make a new node add this node into the zero tail linkedlist in the last this.addLast add the value in the last and retur a new linkedlist so we make new linkedlist equal to old
           zeroTail = this.addLast(zeroTail , current.data)
          }else if(current.data == 1){
            oneTail = this.addLast(oneTail , current.data)
          }else{
             twoTail = this.addLast(twoTail , current.data)
          }
          // take the next value of the linkedlist
          current = current.next
        }

        // add the three linkedlist the zertail is the last node of the linkedlist because we nake a new node every time and add them linkedlist then increase the zerotail and the zeroHead.next is always  the first elemtnt of the linkedlist so the first element to the linkedlist connect to the second and second to third and set the third last lement to null because the last node of the linked list next value is null
        zeroTail.next = oneHead.next || twoHead.next
        oneTail.next = twoHead.next
        twoTail.next = null

        return zeroHead.next

 }

 addLast(tail , data){
  // make a new node
    const newNode = new Node(data);
    // pass the newnode to the next
  tail.next = newNode;
  // return the node
  return newNode
 }

 8. //  *important Given the head of a singly linked list, your task is to left rotate the linked list k times.

// Examples:

// Input: head = 10 -> 20 -> 30 -> 40 -> 50, k = 4
// Output: 50 -> 10 -> 20 -> 30 -> 40
// Explanation:
// Rotate 1: 20 -> 30 -> 40 -> 50 -> 10
// Rotate 2: 30 -> 40 -> 50 -> 10 -> 20
// Rotate 3: 40 -> 50 -> 10 -> 20 -> 30
// Rotate 4: 50 -> 10 -> 20 -> 30 -> 40
  rotate(head, k) {
        // your code here
       if(!head || k == 0)return head

       
       let tail = head
       let length = 1
 
       // going to the last of the node and also count the length
       while(tail.next){
        tail = tail.next
        length++
       }

       k = k % length  // calculate how much time rotate like k = 15 so 15%5 = 3 meas rotate 3 times

       if(k==0) return head

       let prev = null  // store kth prev value
       let current = head // store kthvalue
       let count = 0  

       while(count < k){
        prev = current
          current = current.next
          count++
       }

       // make the kth prev value to null because after this roatetion will start and this is the last node so we make it null
       prev.next = null
       // then we add the our last node of the linked list to the start and make it circular linked list which mean there is no null node in it but before we make a null node which is kth previus node
       tail.next = head
       // make the kth node to the head the current is the complete linked list after the kth node and there is no null in it before we make it circular and so the linked list start from it and the end with pre.next mean kth prev node 
       head = current

       return head
    }

    9. //     You are given the head of a singly linked list. Your task is to determine if the linked list contains a loop. A loop exists in a linked list if the next pointer of the last node points to any other node in the list (including itself), rather than being null.

// Custom Input format:
// A head of a singly linked list and a pos (1-based index) which denotes the position of the node to which the last node points to. If pos = 0, it means the last node points to null, indicating there is no loop.

// Examples:

// Input: head: 1 -> 3 -> 4, pos = 2
// Output: true
// Explanation: There exists a loop as last node is connected back to the second node.

    detectLoop(head) {
        // code here
        let slow = head
        let fast = head
        
        while(fast !== null  && fast.next !== null){
            slow = slow.next
            fast = fast.next.next
            
            if(fast == slow){
                return true
            }
        }
        
        return false
    }

    
  

}



    

const result = new Solution();
// console.log(result.isPalindrome(LinkedList.head));

// console.log(result.reverseList(LinkedList.head));
// console.log(result.getMiddle(LinkedList.head));
// console.log(result.removeDuplicates(LinkedList.head));
// console.log(result.getKthFromLast(LinkedList.head , 2));
// console.log(result.deleteNode(LinkedList.head , 2));
// console.log(result.addTwoLists(LinkedList.head, roughLinked.head));
// console.log(result.segregate(LinkedList.head));
console.log(result.rotate(LinkedList.head , 4));
