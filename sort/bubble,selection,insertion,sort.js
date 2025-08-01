// ************************** BUBBLE SORT *********************

// in the bubble sort we check the array first element is greated then the its right element if its true then we swap both element and again check the element is greated then the first then swap if not then skip the elemnt and go to the next element

// EX : -
let arr = [10, 5, 8, 4, 2, 1];
let n = arr.length;

// we go n-1 because if the arr has 5 element or we sort the 4 elment then the array is sort we dont need to sort the remain 1 so we go n-1 here
for (let i = 0; i < n - 1; i++) {
  // O(n^2) time complexity
  // here i am go n-1-i mean when we check first element we need to check the 4 element in the array or after moving to the next element after we sort the second element but we need to do only 3 iteraton because before we sort one element so when the i increase mean we move to next element so we decrease the iteration
  for (let j = 0; j < n - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      // if its big then swap
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}

// console.log(arr);

// ***************************** SELECTION SORT ******************
// in the selection sort first we select and element and then check this element is smaller then which element mean we find the smallerst number in the array and swap it with the current array so like select an element and then chek any smaller element is present in the array or if present then swap with

//  EX : -

let arr2 = [5, 7, 89, 2, 7, 9, 9];
function selectionSort(arr) {
  // O(n^2) time complexity
  let m = arr.length;
  for (let i = 0; i < m - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < m; j++) {
      if (arr[minIndex] > arr[j]) { 
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}
// console.log(selectionSort(arr2));

//  ************************ INSERTION SORT ***********************
// in the insertion sort we start from the the first element in the array and store the current element in the key varible and make a j varible which is i-1 mean the before element of the current elmenet then check if the before element means j is bigger then the current element if yes then we put j to the the current index and then j++ so now j is away from the current element if present then check the j is bigger the current if have then j+1 = j which mean we put the j to the its on its next index then check again if the j is not bigger then the key we stop excutataion and put the key varible on the j position and so on

//  Ex : -
function insertionSort(arr) {
  // O(n^2) time complexity
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }
  return arr;
}
// console.log(insertionSort( [7, 10, 4, 3, 20, 15]));

// 1. sort and array wihtout using the javascript in build sort method on in o(n) time complexity

//  Note : - we dont use bubble , seletion , insertion sort because it has O(n^2) time complexity

let arr3 = [0, 1, 2, 0, 1, 2];

function sortWithoutMethod(arr) {
  let i = 0;
  let sort = true;

  while (i < arr.length - 1) {
    if (arr[i] - arr[i + 1] > 0) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      sort = false;
    }

    if (i == arr.length - 2 && !sort) {
      i = 0;
      sort = true;
    }
    i++;
    console.log(arr);
  }

  return arr;
}
// console.log(sortWithoutMethod([1, 1, 1, 2 ,1 ,1 ,0 ,2 ,1 ,0]));

2* // Given an integer array arr, return all the unique pairs [arr[i], arr[j]] such that i != j and arr[i] + arr[j] == 0.

// Note: The pairs must be returned in sorted order, the solution array should also be sorted, and the answer must not contain any duplicate pairs.

// Examples:

// Input: arr = [-1, 0, 1, 2, -1, -4]
// Output: [[-1, 1]]
// Explanation: arr[0] + arr[2] = (-1)+ 1 = 0.
// arr[2] + arr[4] = 1 + (-1) = 0.
// The distinct pair are [-1,1].


 function getPairs(arr) {
    arr.sort((a, b) => a - b); // O(n log n)

    let left = 0;
    let right = arr.length - 1;
    let result = [];

    while (left < right) {
      let sum = arr[left] + arr[right];

      if (sum === 0) {
        result.push([arr[left], arr[right]]);

        let leftVal = arr[left];
        let rightVal = arr[right];

        // Skip duplicates on both sides
        // start with both side and first skip all the left side same array then right side 
        while (left < right && arr[left] === leftVal) left++;
        while (left < right && arr[right] === rightVal) right--;

      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }

    return result;
  }
// console.log(getPairs([-1, 0, 1, 2, -1, -4]));   // easy but hard 



function intersection(arr1, arr2) {
        // code here
        let obj  = {}
        let common = []
        
        for(let i = 0 ; i < arr1.length ; i++){
            if(obj[arr1[i]]){
                obj[arr1[i]] = obj[arr1[i]]++
            }else{
                obj[arr1[i]] = 1
            }
        }
        console.log(obj);

        for (let j = 0; j < arr2.length; j++) {
          
          if(obj[arr2[j]]){
            common.push(arr2[j]);
            delete obj[arr2[j]]; 
          }
          
        }

        return common
        
    }

    console.log(intersection([1, 2], [3, 4])); // [2, 3]


    
    
