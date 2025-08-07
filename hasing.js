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
console.log(set); // output : - 10,12,13,14

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
console.log(checkPangram("Bawds jog, flick quartz, vex nymph"));



// ************************ MAP ************************

// map is same as object in the map we store datain the form of key and value and always the key is unique in the map value must bt unique or same but the key is always unique 

let map  = new Map()
map.set("ram" , 6) // keys always write in string 
map.set("age" , 6)
map.set("isAdmin" , true)

map.has("ram") // check the key present in the map or not 
map.delete('ram') // delete the data
map.size // size of the map 
map.get('ram') // take key and gives value of that key

// ************************ print the key value of the map **************

for(let [key , value] of map){
    console.log(key + '=>' + value);
}

// ******************** print only key of the map *********
for(let key of map.keys()){
    console.log(key);
}

// ******************* print only value ************
for(let value of map.values()){
    console.log(value);
    
}


// find the frequency of the element present in the array using map 

let arr2 = [10,20,30,1,0,54,,10,20,40,50,10]
let map2 = new Map()
for (let i = 0; i < arr.length; i++) {
    if(map.has(arr[i])){
         map.set(arr[i] , map.get(arr[i]) + 1)  // rewrite the key 
    }else{
        map.set(arr[i] , 1)
    }
    
}
console.log(map);

1. 
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
        let map  = new Map()
        
        
        for(let i = 0 ; i < arr.length ; i++){
         let diff =   target - arr[i]  // calculate the diff between the target and emelent like 9-4 = 5 if the five is present in the map the return true
         
         if(map.has(diff)){ 
             return true
         }else{
            // then store the value in the map and check again 
             map.set(arr[i] , i)
         }
         
        }
        
        return false
        
    }


    2. //     Given two unsorted integer arrays a[] and b[] each consisting of distinct elements, the task is to return the count of elements in the intersection (or common elements) of the two arrays.

// Intersection of two arrays can be defined as the set containing distinct common elements between the two arrays. 

// Examples:

// Input: a[] = [89, 24, 75, 11, 23], b[] = [89, 2, 4]
// Output: 1
// Explanation: 89 is the only element in the intersection of two arrays.
   function intersectSize(a, b) {
        // code here
        let map = new Map()
        let count = 0
        for(let i = 0 ; i < a.length ; i++){
            map.set(a[i] , i)
        }
        
        for(let j = 0 ; j < b.length ; j++){
            if(map.has(b[j])) count++
        }
        
        
        return count
    }

    3. //     Given an unsorted array arr[] of integers, find the number of subarrays whose sum exactly equal to a given number k.

// Examples:

// Input: arr[] = [10, 2, -2, -20, 10], k = -10
// Output: 3
// Explaination: Subarrays: arr[0...3], arr[1...4], arr[3...4] have sum exactly equal to -10.
// Input: arr[] = [9, 4, 20, 3, 10, 5], k = 33
// Output: 2
// Explaination: Subarrays: arr[0...2], arr[2...4] have sum exactly equal to 33.
    function cntSubarrays(arr, k) {
        // code here
        let map = new Map()
        let sum = 0 , count = 0
        
        map.set(sum , 1)
        
        for(let i = 0 ; i < arr.length ; i++){
            sum += arr[i]
            if(map.has(sum-k)) count += map.get(sum-k)
            
            map.set(sum , (map.get(sum) || 0) + 1)
        }
        
        return count
    }