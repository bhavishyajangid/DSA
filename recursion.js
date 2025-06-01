// recuerion mean doing a work repeatly using the funcation without loop let see

function name() {
  return reenu();
}

function reenu() {
  return meenu();
}

function meenu() {
  return ramu();
}

function ramu() {
  return shayamu();
}

function shayamu() {
  return true; // base case
}

//   in these funcation every function call a another funcation continually and the last shayamu is the base case because whe it return true every funcation return true

// let see how recursion work

function multiply(arr) {
  if (arr.length <= 0) {
    return 1;
  } else {
    return arr[arr.length - 1] * multiply(arr.slice(0, arr.length - 1));
  }
}

//   console.log(multiply([1,2,3,4]));

//like these we use recursion

//   1. factorial of the arry

function factorial(num) {
  if (num <= 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// console.log(factorial(5));

//2.   make a arr of this range 1 to 5
function rangeOfNumber(start, end) {
  if (end < start) {
    return [];
  } else {
    const number = rangeOfNumber(start, end - 1);
    number.push(end);
    return number;
  }
}
// console.log(rangeOfNumber(1 , 5));

// rangeOfNumber(1 , 5) => [1,2,3,4,5]
//rangeOfNumber(1,4) =>  [1,2,3,4]
//rangeOfNumber(1,3) => [1,2,3]
//rangeOfNumber(1,2) => [1,2]
//rangeOfNumber(1,1) => [1]
//rangeOfNumber(1,0) => []

// 3.  is the number is palidrom

function isNumberPalidrom(num, j = 0, index = null) {
  let str = num.toString();
  if (index == null) index = str.length - 1;

  if (j >= index) return true;
  if (str[j] !== str[index]) {
    return false;
  }

  return isNumberPalidrom(num, j + 1, index - 1);
}

// console.log(isNumberPalidrom(1245));

//3. finding a fibonic number mean its start from 0,1 and add the previous value to make next value

// ex : 0 + 1 = 1
//      1 + 1 = 2
//      1 + 2 = 3
//      2 + 3 = 5 so on

function fibonicNumber(n) {
  if (n <= 1) return n;

  return fibonicNumber(n - 1) + fibonicNumber(n - 2); // this is the formula to calculate the fibonic number
}

// console.log(fibonicNumber(5));

// using for loop

var fib = function (n) {
  let arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
};

//4. reverse a string

// this is with recursion but i am doing this with liner recursion
function reverseString(value, j = 0, index = null) {
  let str = value;
  if (j == 0) str = value.split("");

  if (index == null) index = str.length - 1;

  let temp = str[j];
  str[j] = str[index];
  str[index] = temp;

  if (j == index) {
    return str.join("");
  }

  return reverseString(str, j + 1, index - 1);
}

// console.log(reverseString('hello'));

function reverse(str) {
  if (str == "") {
    return "";
  } else {
    return reverse(str.substr(1)) + str.charAt(0);
  }
}
// console.log(reverse("hello"));

// its remove first element from a string and add them into the end
// hello  =  ello + h = >  elloh
// ello   =  llo + e  = >  lloeh
//llo     =  lo  + l  = >  loleh
//lo      =  o   + l  = >  olleh

// 5. give an intergerarray nums return alll the posible subset the set not contain the duplicate subste

// let nums = [1,2,3]  => [[] , [1] , [1,2] , [2] , [3] , [1,3] , [2,3] , [1,2,3]]

// function subSet(nums) {
//   let result = [];
//   let temp = [];

//   function recursionSubset(nums, i) {
//     if (i === nums.length) {
//       return result.push([...temp]);
//     }

//     temp.push(nums[i]);
//     recursionSubset(nums, i + 1);
//     temp.pop();
//     recursionSubset(nums, i + 1);
//   }

//   recursionSubset(nums, 0);
//   return result;
// }

// console.log(subSet([1,2,3]));

// function printNum(n){
//     if(n == 0) return
//         console.log(n)
//        printNum(n  -1 )
// }

// printNum(10)

6; // remove the mid element from an stack using recursion
class Solution {
  deleteMid(stack) {
    const size = stack.length;
    const midFromBottom = Math.floor((size + 1) / 2); // 1-based from bottom
    const targetFromTop = size - midFromBottom + 1; // 1-based from top

    const deleteHelper = (curr) => {
      if (curr === targetFromTop) {
        stack.pop(); // remove mid
        return;
      }

      const top = stack[stack.length - 1];
      stack.pop();

      deleteHelper(curr + 1);

      stack.push(top);
    };

    deleteHelper(1); // start recursion from top
  }
}

// let d = new Solution();
// console.log( d.deleteMid([10, 20, 30, 40]));

7; //  find the smallerst number after the index number is smallest then print it if not then set -1 at it place

class print {
  immediateSmaller(arr) {
    // code here
    this.printSmaller(arr, 0);
    return arr;
  }

  printSmaller(arr, index) {
    console.log(arr, index);

    if (index == arr.length) {
      arr[arr.length - 1] = -1;
      return;
    }

    if (arr[index] > arr[index + 1]) {
      arr[index] = arr[index + 1];
    } else {
      arr[index] = -1;
    }

    this.printSmaller(arr, index + 1);
  }
}

8. // find the given string is valid paranthesis 

let d = new print();
// console.log( d.immediateSmaller([4, 1]));

class para {
  constructor() {
    this.stack = [];
  }
  isBalanced(s) {
    // code here
    return this.checkPare(s, 0);
  }

  checkPare(arr, first) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "(" || arr[i] == "{" || arr[i] == "[") {
        this.stack.push(arr[i]);
      } else {
        let top = this.stack[this.stack.length - 1];
        console.log(top, arr[i], this.stack);
        if (
          (arr[i] === ")" && top === "(") ||
          (arr[i] === "}" && top === "{") ||
          (arr[i] === "]" && top === "[")
        ) {
          this.stack.pop();
        } else {
          return false;
        }
      }
    }

    return this.stack.length === 0;
  }
}
let g = new para();
// console.log(g.isBalanced("([])"));


9.//  reverse the  array element like this reverse first element to right to left then second element to left to right and third elemnt to right to left in these option a condition in the first iteration take 1 element then 2 then 4 then 8 like this
class tree {
  constructor() {
    this.stack = [];
  }
  findSpiral(root) {
    // code here
    this.reverse(root, 0, 1);
  }

  reverse(arr, start, end) {
    if (start >= arr.length) return;

    if (start % 2 !== 0 && start > 1) {
      let m = end;
      if (end > arr.length) {
        m = arr.length - 1;
      }

      for (let i = start; i < m; i++, m--) {
        console.log(i, m, " in the loop");

        let temp = arr[i];
        arr[i] = arr[m];
        arr[m] = temp;
      }
    }

    console.log(arr, start, end);

    if (start == 0) {
      start += 1;
      end += 1;
    } else {
      start += end;
      end *= start;
    }

    this.reverse(arr, start, end);
  }
}

const f = new tree();
// console.log(f.findSpiral([1, 2, "N", 4]));


10. //A total of n people are standing in a circle, and you are one of them playing a game. Starting from a person, k persons will be counted in order along the circle, and the kth person will be killed. Then the next k persons will be counted along the circle, and again the kth person will be killed. This cycle will continue until only a single person is left in the circle.

// If there are 5 people in the circle in the order A, B, C, D, and E, you will choose k=3. Starting from A, you will count A, B and C. C will be the 3rd person and will be killed. Then you will continue counting from D, E and then A. A will be third person and will be killed. 

// You will be given an array where the first element is the first person from whom the counting will start and the subsequent order of the people. You want to be the last one standing. Determine the index at which you should stand to survive the game. Return an integer denoting safe position. 
class Remove {
  josephus(n, k) {
    const res = [];
    for (let i = 1; i <= n; i++) {
      res.push(i);
    }

    return this.delete(res, k, 0, 0);
  }

  delete(arr, k, killer, runner) {
    if (arr.length === 1) return arr[0]; // return the last person

    if (runner >= arr.length) {
      runner = 0; // wrap around
    }

    if (killer === k - 1) {
      arr.splice(runner, 1); // eliminate the k-th person
      killer = 0;
    } else {
      runner++;
      killer++;
    }

    return this.delete(arr, k, killer, runner);
  }
}

const r = new Remove();
// console.log(r.josephus(5, 2)); // Should return 3


11. // reverse  a string using stack  
class reve {
 reverse(s) {
        // code here
      let stack = []
      let reverse = ''
      for (let i = 0; i < s.length; i++) {
         stack.push(s[i]);
        
      }

      while(stack.length > 0){
         reverse += stack.pop()
      }

      return reverse
        
    }
}

const re = new reve();
// console.log(re.reverse("GeeksforGeeks"));

// 11. Given an array of negative and non-negative integers. You have to make the array beautiful. An array is beautiful if two adjacent integers, arr[i] and arr[i+1] are either negative or non-negative. And you can do the following operation any number of times until the array becomes beautiful.

// If two adjacent integers are different i.e. one of them is negative and other is non-negative, remove them.
// Return the beautiful array after performing the above operation.

// Note:An empty array is also a beautiful array. There can be many adjacent integers which are different as stated above. So remove different adjacent integers as described above from left to right.


class negative {
    // Function to make the given array beautiful.
    makeBeautiful(arr) {
        let stack = []
       for (let i = 0; i < arr.length; i++) {
    
        
        
        if(i == arr.length - 1 && arr[i] > 0 &&  arr[i+1] > 0 || arr[i] < 0 && arr[i+1] < 0 ){
           stack.push(arr[i])
        }else{
          if(arr[i] > 0 &&  arr[i+1] > 0 || arr[i] < 0 && arr[i+1] < 0  ){
           stack.push(arr[i])
        }
        }
       
         
    
       }

       
            return stack
    }
}

const n = new negative()
console.log(n.makeBeautiful([1,10]));

