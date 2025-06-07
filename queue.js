// queue is also same as stack
// stack : =   but the stack is working on lifo mean last in first out in the stack the number which is inserted first comes last

// queue is working in fifi mean first in first out

// queue have some method to manulpate it

// 1. enqueue : - which push an element into the queue in the last

// 2. dequeue  : -  remove the element from the start

// 3. front  : -   print the first element of the queue

// 4. rear : -   print the last element of the queue

//5. isEmpty : - tell us the queue is empty or not

// 6. size : - tell the size of the queue

// let ex :

class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return false;
    this.queue.shift();
  }

  front() {
    if (this.isEmpty()) return false;
    return this.queue[0];
  }

  rare() {
    if (this.isEmpty()) return false;
    return this.queue[this.size()];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.queue.length - 1;
  }

  printQueue() {
    let str = "";
    for (let i = 0; i < this.size(); i++) {
      str += this.queue[i] + ", ";
    }
    console.log(this.queue);

    return str;
  }
}

const de = new Queue();
console.log(de.enqueue(2));
de.enqueue(5);
de.enqueue(6);
de.enqueue(7);
de.dequeue();
console.log(de.front());
console.log(de.rare());
de.printQueue();

// 2. *********************** CIRCULAR QUEUE ******************

// NOTE : - circular queue has fixed length we do not change it
// or if we remove a element from and circular queue the place of the deleted element set to empty space not remove it set to empty space and not change into length of the circulat queue

//    circular queue have only one extra method which is isFull

//    1. isFull : -
//  tell us the circular queue is full or not mean any empty space present in the queue or not

//2  ********************* implement stack using queue ********

var myStack = function () {
  this.q1 = [];
  this.q2 = [];
};

myStack.prototype.push = function (x) {
  while (this.q1.length !== 0) {
    this.q2.push(this.q1.shift());
  }
  this.q1.push(x);
  while (this.q1.length !== 0) {
    this.q1.push(this.q2.shift());
  }
};
myStack.prototype.pop = function () {
  return this.q1.shift();
};
myStack.prototype.top = function () {
  return this.q1[0];
};
myStack.prototype.empty = function () {
  return this.q1.length == 0;
};

// ************ implementing queue using stack ************

var myStack = function () {
  this.s1 = [];
  this.s2 = [];
};

myStack.prototype.enqueue = function (x) {
  this.s1.push(x);
};
myStack.prototype.dequeue = function () {
  if (this.s2.length === 0) {
    while (this.s1.length > 0) {
      this.s2.push(this.s1.pop());
    }
  }

  return this.s2.pop();
};
myStack.prototype.front = function () {
  if (this.s2.length === 0) {
    while (this.s1.length > 0) {
      this.s2.push(this.s1.pop());
    }
  }

  return this.s2[this.s2.length - 1];
};
myStack.prototype.empty = function () {
  return this.s1.length === 0 && this.s2.length === 0;
};

3; //Given an input stream s consisting only of lowercase alphabets. While reading characters from the stream, you have to tell which character has appeared only once in the stream upto that point. If there are many characters that have appeared only once, you have to tell which one of them was the first one to appear. If there is no such character then append '#' to the answer.

// NOTE:
// 1. You need to find the answer for every i (0 <= i < n)
// 2. In order to find the solution for every you need to consider the string from starting position till the ith position.

class Solution {
  constructor() {
    this.queue = [];
    this.freq = {}; // To store frequency of characters
  }

  FirstNonRepeating(s) {
    let result = "";

    for (let i = 0; i < s.length; i++) {
      let ch = s[i];

      if (!this.freq[ch]) {
        this.freq[ch] = 1;
      } else {
        this.freq[ch] += 1;
      }

      this.queue.push(ch);

      while (this.queue.length > 0 && this.freq[this.queue[0]] > 1) {
        this.queue.shift();
      }

      if (this.queue.length > 0) {
        result += this.queue[0];
      } else {
        result += "#";
      }
    }

    return result;
  }
}

3. //Given an array arr[]  and a positive integer k, find the first negative integer for each and every window(contiguous subarray) of size k.

// Note: If a window does not contain a negative integer, then return 0 for that window.

          // unoptimised way 

// class Solut {
//   constructor() {
//     this.queue = [];
//     this.result = [];
//   }
//   firstNegInt(arr, k) {
//     // write code here

//     for (let i = 0; i < arr.length; i++) {
//       if (arr.length < 2) return arr;

//       this.queue.push(arr[i]);

//       if (this.queue.length >= k) {
//         let negative = this.queue[0];
//         let j = 0;
//         while (k > j) {
//           if (this.queue[j] < 0) {
//             negative = this.queue[j];
//             break;
//           }
//           j++;
//         }

//         if (negative > 0) {
//           this.result.push(0);
//         } else {
//           this.result.push(negative);
//         }
//         this.queue.shift();
//       }

//     }
//   }
// }

// const sol = new Solut();
// console.log(sol.firstNegInt([12, 1, 3, 5], 3));


////           UPTIMISED WAY 

class Solution {
  
 constructor() {
    this.result = [];
  }

  firstNegInt(arr, k) {
    const deque = []; // stores indexes of negative numbers

    for (let i = 0; i < arr.length; i++) {
      // Step 1: Remove elements out of the current window
      if (deque.length > 0 && deque[0] <= i - k) {
        deque.shift();
      }

      // Step 2: Add current element if it's negative
      if (arr[i] < 0) {
        deque.push(i);
      }

      // Step 3: If window has hit size k, append result
      if (i >= k - 1) {
        if (deque.length > 0) {
          this.result.push(arr[deque[0]]);
        } else {
          this.result.push(0);
        }
      }
    }

    return this.result;
  }
  
}

