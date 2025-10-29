// Basic Stack Implementation

class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is Empty. Can't perform pop.";
    }

    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is Empty. Can't perform peek.";
    }

    return this.stack[this.size() - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.stack.length;
  }

  printStack() {}
}

const stack = new Stack();

stack.push(10);
stack.push(69);
stack.push(420);

console.log(stack.size());

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack.peek());

console.log(stack.isEmpty());

console.log(stack.size());


    //  NOTE :- STACK FOLLOW LIFO MEAN FIRST IN LAST OUT AND WHEN WE USE POP IN STACK IT RETURN THE LAST ELEMNT WHICH IS ON THE STACK STACK IS OPPOSITE TO THE ARRAY ACCORDING TO ELEMENT GIVE IN THE ARRAY IF WE PUSH IT IN IT AND LOOP THE ARRAY WE RECEIVE THE PUSH ELEMENT TO THE LAST BUT IN THE IF WE PUSH THE ELEMENT IN THE STACK WE RECEIVE IT FIRST SO THIS IS FOLLOW LIFO 

// Ques 1 : Given an input string s, reverse the order of the words

// Input: "the sky is blue"     ----->>>>>     Output: "blue is sky the"
// Input: "  hello world  "     ----->>>>>     Output: "world hello"
// Input: "a good   example"    ----->>>>>     Output: "example good a"

// "the sky is blue" => [the,sky,is,blue]
// [] => [the,sky,is,blue] => blue is sky the

const reverseWords = function (s) {
  const splitS = s.split(" ");
  const stack = [];

  for (let i of splitS) {
    stack.push(i);
  }

  let finalS = "";

  while (stack.length) {
    const current = stack.pop();

    if (current) {
      finalS += " " + current;
    }
  }

  return finalS.trim();
};

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("a good   example"));

// Time Complexity = O(n)
// Space Complexity = O(n)


// Ques 2 : Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
//          determine if the input string is valid.
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Input: "()"             ----->>>>>        Output: true
// Input: "([]{})"         ----->>>>>        Output: true
// Input: "(]"             ----->>>>>        Output: false

function isValid(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (isEmpty(stack)) {
        return false;
      }

      const top = stack.pop();
      if (
        (char === ")" && top !== "(") ||
        (char === "]" && top !== "[") ||
        (char === "}" && top !== "{")
      ) {
        return false;
      }
    }
  }

  return isEmpty(stack);
}

function isEmpty(stack) {
  return stack.length === 0;
}

const string1 = "([{})";
console.log(isValid(string1));

// Time Complexity = O(n)
// Space Complexity = O(n)


// Given an integer k and a queue of integers, we need to reverse the order of the first k elements of the queue, leaving the other elements in the same relative order.

// Only following standard operations are allowed on queue.

// enqueue(x) : Add an item x to rear of queue
// dequeue() : Remove an item from front of queue
// size() : Returns number of elements in queue.
// front() : Finds front item.
// Note: The above operations represent the general processings. In-built functions of the respective languages can be used to solve the problem.

// "If the size of queue is smaller than the given k , then return the original queue."

// Input: q = [1, 2, 3, 4, 5], k = 3
// Output: [3, 2, 1, 4, 5]
// Explanation: After reversing the first 3 elements from the given queue the resultant queue will be 3 2 1 4 5

//  if (k > q.length) return q;

//     let stack = [];

//     // Step 1: Push first k elements into stack
//     for (let i = 0; i < k; i++) {
//       stack.push(q.shift()); // remove from front
//     }

//     // Step 2: Pop from stack and push back into queue
//     while (stack.length > 0) {
//       q.push(stack.pop()); // add to back
//     }
    
    

//     // Step 3: Move the rest (n - k) elements to back to maintain order
//     let remaining = q.length - k;
//     for (let i = 0; i < remaining; i++) {
//       q.push(q.shift());
//     }

//     return q;

// explanation : - first make a stack then add the reversion item into the stack then again push the stack item into the queue and after the complete queue will be reverse but we need only k interger reversed so unreversed the remain interger in third time take first interger from queue and set on the last of the queue 