// ************************** HASHING ********************

// hasing always store data in hash code and always stored uniques element

// hashing time complexty for searching is o(1)
// set id the part of hashing

let set = new Set();
set.add("B");
set.add("b");
set.add(13);
set.add(14);
set.add(10); // this will automaticall remove because hash store only unique element
// console.log(set); // output : - 10,12,13,14

// set.has() // check the element present in or not

//Q1.  YOU HAVE AN ARRAY FIND THE UNIQUE ELEMENT FORM IT

let arr = [10, 14, 1, 4, 6, 8789, 10, 14, 4, 6, 8789];

// let set = new Set()

// for (let i = 0; i < arr.length; i++) {
//     if(set.has(arr[i])) {
//        set.delete(arr[i])
//     }else{
//        set.add(arr[i])
//     }

// }
// console.log(set);  // unique element is 1

// if you want to remove all the duplicates from an array using hash you do this

// let set = new Set(arr)
// console.log(set);

2; // Given a string s, check if it is a "Panagram" or not. Return true if the string is a Panagram, else return false.
// A "Panagram" is a sentence containing every letter in the English Alphabet either in lowercase or Uppercase.

// Examples:

// Input: s = "Bawds jog, flick quartz, vex nymph"
// Output: true
// Explanation: In the given string, there are all the letters of the English alphabet. Hence, the output is true.

function checkPangram(s) {
  // code here
  let set = new Set();
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i).toLowerCase();
    if (char >= "a" && char <= "z") {
      set.add(char);
    }
  }

  return set.size == 26;
}
// console.log(checkPangram("Bawds jog, flick quartz, vex nymph"));

// ************************ MAP ************************

// map is same as object in the map we store datain the form of key and value and always the key is unique in the map value must bt unique or same but the key is always unique

let map = new Map();
map.set("ram", 6); // keys always write in string
map.set("age", 6);
map.set("isAdmin", true);

map.has("ram"); // check the key present in the map or not
map.delete("ram"); // delete the data
map.size; // size of the map
map.get("ram"); // take key and gives value of that key

// ************************ print the key value of the map **************

for (let [key, value] of map) {
  // console.log(key + '=>' + value);
}

// ******************** print only key of the map *********
for (let key of map.keys()) {
  // console.log(key);
}

// ******************* print only value ************
for (let value of map.values()) {
  // console.log(value);
}

// find the frequency of the element present in the array using map

let arr2 = [10, 20, 30, 1, 0, 54, , 10, 20, 40, 50, 10];
let map2 = new Map();
for (let i = 0; i < arr.length; i++) {
  if (map.has(arr[i])) {
    map.set(arr[i], map.get(arr[i]) + 1); // rewrite the key
  } else {
    map.set(arr[i], 1);
  }
}
// console.log(map);

1;
// Given an array arr[] of integers and another integer target. Determine if there exist two distinct indices such that the sum of their elements is equal to the target.

// Examples:

// Input: arr[] = [0, -1, 2, -3, 1], target = -2
// Output: true
// Explanation: arr[3] + arr[4] = -3 + 1 = -2
// Input: arr[] = [1, -2, 1, 0, 5], target = 0
// Output: false
// Explanation: None of the pair makes a sum of 0

function twoSum(arr, target) {
  // code here
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i]; // calculate the diff between the target and emelent like 9-4 = 5 if the five is present in the map the return true

    if (map.has(diff)) {
      return true;
    } else {
      // then store the value in the map and check again
      map.set(arr[i], i);
    }
  }

  return false;
}

2; //     Given two unsorted integer arrays a[] and b[] each consisting of distinct elements, the task is to return the count of elements in the intersection (or common elements) of the two arrays.

// Intersection of two arrays can be defined as the set containing distinct common elements between the two arrays.

// Examples:

// Input: a[] = [89, 24, 75, 11, 23], b[] = [89, 2, 4]
// Output: 1
// Explanation: 89 is the only element in the intersection of two arrays.
function intersectSize(a, b) {
  // code here
  let map = new Map();
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    map.set(a[i], i);
  }

  for (let j = 0; j < b.length; j++) {
    if (map.has(b[j])) count++;
  }

  return count;
}

3; //     Given an unsorted array arr[] of integers, find the number of subarrays whose sum exactly equal to a given number k.

// Examples:

// Input: arr[] = [10, 2, -2, -20, 10], k = -10
// Output: 3
// Explaination: Subarrays: arr[0...3], arr[1...4], arr[3...4] have sum exactly equal to -10.
// Input: arr[] = [9, 4, 20, 3, 10, 5], k = 33
// Output: 2
// Explaination: Subarrays: arr[0...2], arr[2...4] have sum exactly equal to 33.
function cntSubarrays(arr, k) {
  // code here
  let map = new Map();
  let sum = 0,
    count = 0;

  map.set(sum, 1);

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (map.has(sum - k)) count += map.get(sum - k);

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
}

4; // Given two arrays a[] and b[] of equal size, the task is to find whether the elements in the arrays are equal.
// Two arrays are said to be equal if both contain the same set of elements, arrangements (or permutations) of elements may be different though.
// Note: If there are repetitions, then counts of repeated elements must also be the same for two arrays to be equal.

// Examples:

// Input: a[] = [1, 2, 5, 4, 0], b[] = [2, 4, 5, 0, 1]
// Output: true
// Explanation: Both the array can be rearranged to [0,1,2,4,5]
// Input: a[] = [1, 2, 5], b[] = [2, 4, 15]
// Output: false
// Explanation: a[] and b[] have only one common value.
function checkEqual(a, b) {
  // code here
  let map = new Map();

  for (let i = 0; i < a.length; i++) {
    map.set(a[i], (map.get(a[i]) || 0) + 1);
  }
  console.log(map);

  for (let j = 0; j < b.length; j++) {
    if (map.get(b[j]) > 0) {
      map.set(b[j], map.get(b[j]) - 1);
    } else {
      return false;
    }
  }

  return true;
}
// console.log(checkEqual([1, 2, 5, 4, 0] , [2,4 ,5 ,0,1]));

5; //You are given an array arr[] containing positive integers. The elements in the array arr[] range from  1 to n (where n is the size of the array), and some numbers may be repeated or absent. Your have to count the frequency of all numbers in the range 1 to n and return an array of size n such that result[i] represents the frequency of the number i (1-based indexing).

// Examples:

// Input: arr[] = [2, 3, 2, 3, 5]
// Output: [0, 2, 2, 0, 1]
// Explanation: We have: 1 occurring 0 times, 2 occurring 2 times, 3 occurring 2 times, 4 occurring 0 times, and 5 occurring 1 time.
// Input: arr[] = [3, 3, 3, 3]
// Output: [0, 0, 4, 0]
// Explanation: We have: 1 occurring 0 times, 2 occurring 0 times, 3 occurring 4 times, and 4 occurring 0 times.

function frequencyCount(arr) {
  // code here
  let map = new Map();
  let arry = [];
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }

  for (let j = 1; j <= arr.length; j++) {
    if (map.get(j)) {
      arry.push(map.get(j));
    } else {
      arry.push(0);
    }
  }

  return arry;
}

// console.log(frequencyCount([1]));

function findTriplets(arr) {
  // code here

  let map = new Map();

  for (let k = 0; k < arr.length; k++) {
    map.set(arr[k], (map.get(arr[k]) || 0) + 1);
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      let sum = arr[i] + arr[j];
    //   console.log(sum , arr[i] , arr[j] , 'before');
      
      sum = -sum;
    //   console.log(sum , arr[i] , arr[j]);
      
      if (map.has(sum) && arr[i] !== sum && arr[j] !== sum) {
        return true;
      }
    }
  }
  return false;
  
}
// console.log(findTriplets([44, 33, 18, -22, -37, -13, -35, 37, -13]));


 7. // **Given an array arr[] of integers and another integer target. You have to find all unique quadruples from the given array whose sum is equal to the given target.

// Note: All the quadruples should be internally sorted, i.e for any quadruple [q1, q2, q3, q4] it should be : q1 ≤ q2 ≤ q3 ≤ q4.

// Examples :

// Input: arr[] = [0, 0, 2, 1, 1], target = 3
// Output: [[0, 0, 1, 2]]
// Explanation: Sum of 0, 0, 1, 2 is equal to 3.
// Input: arr[] = [10, 2, 3, 4, 5, 7, 8], target = 23
// Output: [[2, 3, 8, 10], [2, 4, 7, 10], [3, 5, 7, 8]] 
// Explanation: Sum of [2, 3, 8, 10] is 23, sum of [2, 4, 7, 10] is 23 and sum of [3, 5, 7, 8] is also 23.
// Input: arr[] = [0, 0, 2, 1, 1], target = 2
// Output: [[0, 0, 1, 1]]
// Explanation: Sum of [0, 0, 1, 1] is equal to 2

function fourSumHash(arr, target) {
    const n = arr.length;
    arr.sort((a, b) => a - b); // sort to handle duplicates easily
    const pairSum = new Map();
    const result = new Set();

    // Step 1: Store all pairs in hash map
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let sum = arr[i] + arr[j];
            if (!pairSum.has(sum)) {
                pairSum.set(sum, []);
            }
            pairSum.get(sum).push([i, j]); // store indices
        }
    }

    // Step 2: Check for complementary pairs
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let sum = arr[i] + arr[j];
            let remaining = target - sum;

            if (pairSum.has(remaining)) {
                for (let [x, y] of pairSum.get(remaining)) {
                    // Ensure no index overlaps
                    if (x !== i && x !== j && y !== i && y !== j) {
                        let quad = [arr[i], arr[j], arr[x], arr[y]].sort((a, b) => a - b);
                        result.add(JSON.stringify(quad)); // store unique as string
                    }
                }
            }
        }
    }

    // Convert set back to array
    return Array.from(result).map(q => JSON.parse(q));
}

// console.log(fourSumHash([10, 2, 3, 4, 5, 7, 8], 23));


8. // You are given two arrays a[] and b[], return the Union of both the arrays in any order.

// The Union of two arrays is a collection of all distinct elements present in either of the arrays. If an element appears more than once in one or both arrays, it should be included only once in the result.

// Note: Elements of a[] and b[] are not necessarily distinct.
// Note that, You can return the Union in any order but the driver code will print the result in sorted order only.

// Examples:

// Input: a[] = [1, 2, 3, 2, 1], b[] = [3, 2, 2, 3, 3, 2]
// Output: [1, 2, 3]
// Explanation: Union set of both the arrays will be 1, 2 and 3.

function findUnion(a, b) {
        // code here
        let result = []
       let map = new Map()
        let max = Math.max(a.length , b.length)
        
       for (let i = 0; i < max; i++) {
        if(i < a.length){
            if(!map.get(a[i])){
               map.set(a[i] , 1)
            }
        }

        if(i < b.length){
           if(!map.get(b[i])){
               map.set(b[i] , 1)
            }
        }
        
       }

      
       for (let key of map.keys()) {
     result.push(key)
}
        return result;
        
    }

    console.log(findUnion([1, 2, 3] , [4, 5, 6] ))
    

