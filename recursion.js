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
console.log(reverse("hello"));

// its remove first element from a string and add them into the end
// hello  =  ello + h = >  elloh
// ello   =  llo + e  = >  lloeh
//llo     =  lo  + l  = >  loleh
//lo      =  o   + l  = >  olleh

// 5. give an intergerarray nums return alll the posible subset the set not contain the duplicate subste

// let nums = [1,2,3]  => [[] , [1] , [1,2] , [2] , [3] , [1,3] , [2,3] , [1,2,3]]

function subSet(nums) {
  let result = [];
  let temp = [];

  function recursionSubset(nums, i) {
    if (i === nums.length) {
      return result.push([...temp]);
    }

    temp.push(nums[i]);
    recursionSubset(nums, i + 1);
    temp.pop();
    recursionSubset(nums, i + 1);
  }

  recursionSubset(nums, 0);
  return result;
}

console.log(subSet([1,2,3]));
