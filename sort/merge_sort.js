// **************************** MERGE SORT ********************

// in the merge sort first we divide the array into two parts from the mid then we first sort the left array and then sort right and at the last we comapre between the left array or right array element which is smaller and then oush into a new array and return this array lets code it

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  // console.log(mid);
  let left = mergeSort(arr.slice(0, mid ));
  let right = mergeSort(arr.slice(mid));
  console.log(left, right);

  return merge(left, right );
}

function merge(left, right ) {
  console.log("come in", left, right);

  let sortedArray = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      
      sortedArray.push(right.shift());
    }
  }
 

  return [...sortedArray, ...left, ...right];
}

// console.log(mergeSort([2, 4, 1, 5 , 3] ,0));

// here we first divide the array into two parts and then store into the left and right how here  confusing part is when the left past store it call again the funcat,ion funcation call and again its calculate mid of the left array which is [8,3,5,4] and store into left which is [8,3] again call the funcaiton and calculate mid and now the array is [8,3] and store left of the mid is[8] now call again and here the condition if the arr.length <=1 then we go so now the length is small and return the left element [8] how the left funcation is call but the right is return because every time you calculate the left you call the mergersort and under the left is return then left is stop work but under the left right run or run every time when you calculate left like when we hit last case we have [8] for this funcation we return and go the right funcation and call so the [8] here the left element but the right is [3] and then again we call right funcaiton we have [5,4]and so on so first sort the left whole and after right whole array

// check the pdf for more understanding which is in this folder

// *************** second way ***************

function divide(arr, first, last) {
  if (first >= last) return;

  let mid = Math.floor((first + last) / 2);

  divide(arr, first, mid);
  divide(arr, mid + 1, last);
  conquer(arr, first, mid, last);
}

function conquer(arr, first, mid, last) {
  let temp = new Array(last - first + 1);
  let i = first;
  let j = mid + 1;
  let k = 0;

  console.log(first , arr[i] , arr[j] , arr);
  
  while (i <= mid && j <= last) {
    if (arr[i] < arr[j]) {
      temp[k++] = arr[i++];
    } else {
     
      
      temp[k++] = arr[j++];
    }
  }

  while (i <= mid) {
    temp[k++] = arr[i++];
  }

  while (j <= last) {
    temp[k++] = arr[j++];
  }

  // Copy temp back into original array
  for (let p = 0; p < temp.length; p++) {
    arr[first + p] = temp[p];
  }
}



let arr = [5, 9, 8, 6, 2, 8, 1, 98];
// divide(arr, 0, arr.length - 1);
// console.log(arr); // Output: sorted array

1; //. Given two arrays arr1[] and arr2[], return the merged array in ascending order containing unique elements.

// Examples:

// Input: arr1[] = [11, 1, 8], arr2[] = [10, 11]
// Output: [1, 8, 10, 11]
// Explanation: The ouput array after merging both the arrays and removing duplicates is [1, 8, 10, 11]

function removeDuplicate(arr1, arr2) {
  let arr = mergeSort([...arr1, ...arr2]);

  // Remove duplicates in-place
  let i = 0;
  while (i < arr.length - 1) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i + 1, 1); // remove duplicate
    } else {
      i++; // move forward only if no deletion (to avoid skipping)
    }
  }

  return arr;
}

// console.log(removeDuplicate([7, 1, 5, 3, 9] , [8, 4, 3, 5, 2, 6]));

2; // You are given an array of size N. Rearrange the given array in-place such that all the negative numbers occur before all non-negative numbers.
// (Maintain the order of all -ve and non-negative numbers as given in the original array).

// Example 1:

// Input:
// N = 4
// Arr[] = {-3, 3, -2, 2}
// Output:
// -3 -2 3 2
// Explanation:
// In the given array, negative numbers
// are -3, -2 and non-negative numbers are 3, 2.

function sortElementNotChange(arr) {
  if (arr.length <= 1) return arr;

  let mid = arr.length / 2;

  let left = sortElementNotChange(arr.slice(0, mid));
  let right = sortElementNotChange(arr.slice(mid));

  return sortmerge(left, right);
}

function sortmerge(left, right) {
  console.log(left, right, "in");
  let sortedArray = [];
  while (left.length && right.length) {
    console.log(left[0], right[0], sortedArray);

    if (left[0] < 0) {
      sortedArray.push(left.shift());
    } else {
      if (left[0] > -1 && right[0] > -1) {
        sortedArray.push(left.shift());
      } else {
        sortedArray.push(right.shift());
      }
    }
  }

  return [...sortedArray, ...left, ...right];
}

// console.log(sortElementNotChange([-5 ,-2, 3, -3,5, 5, -4]));

3; //Count Inversions Using Merge Sort
// Problem:
// Count the number of inversions in the array.
// An inversion is a pair (i, j) such that i < j and arr[i] > arr[j].

// Input:
// arr = [8, 4, 2, 1]

// Output:
// 6

// Explanation:
// Inversions are: (8,4), (8,2), (8,1), (4,2), (4,1), (2,1)

function inversions(arr) {
  if (arr.length <= 1) return arr;
  let pair = 0;

  let mid = Math.floor(arr.length / 2);
  console.log(mid, "mid");

  let left = inversions(arr.slice(0, mid));
  let right = inversions(arr.slice(mid));

  return findPair(left, right, pair);
}

function findPair(left, right, pair) {
  console.log("come in", left, right, pair);

  let sortedArray = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
  console.log("sort", [...sortedArray, ...left, ...right]);

  return [...sortedArray, ...left, ...right];
}

// console.log(inversions([2, 4, 1, 3, 5]));

4; // Given an array arr[] of distinct elements. Find the minimum number of swaps required to sort the array in strictly increasing order.

// Examples:

// Input: arr[] = [2, 8, 5, 4]
// Output: 1
// Explanation: Swap 8 with 4 to get the sorted array.

function minSwaps(arr) {
  //   arr = [
  //   {value: 32524, index: 0},
  //   {value: 30965, index: 1},
  //   {value: 30657, index: 2},
  //   {value: 18612, index: 3},
  //   {value: 29956, index: 4},
  //   {value: 15628, index: 5},
  //   {value: 16059, index: 6},
  //   {value: 10826, index: 7},
  //   {value: 23546, index: 8},
  //   {value: 22340, index: 9}
  // ]
  // code here
  let n = arr.length;
  // make a array in which we store object with the value or its original index
  const arrProps = arr.map((value, index) => ({ value, index }));

  //        arrProps = [
  //   {value: 10826, index: 7},
  //   {value: 15628, index: 5},
  //   {value: 16059, index: 6},
  //   {value: 18612, index: 3},
  //   {value: 22340, index: 9},
  //   {value: 23546, index: 8},
  //   {value: 29956, index: 4},
  //   {value: 30657, index: 2},
  //   {value: 30965, index: 1},
  //   {value: 32524, index: 0}
  // ]

  // then sort the array of object according to its value
  arrProps.sort((a, b) => a.value - b.value);

  // create a array of array size because we see i am visited or not on this index

  const visited = new Array(n).fill(false);
  let swap = 0;

  // here we loop the array
  for (let i = 0; i < n; i++) {
    // check i am visited on this index or if the element present at the same index in array or in sorted array which no need to calculate because this element present on the correct index

    if (visited[i] || arrProps[i].index == i) continue;

    let cycleSize = 0;
    let j = i;
    i = 0;

    while (!visited[j]) {
      visited[j] = true; // if not visited then mark it visited
      j = arrProps[j].index; // here we show if at the o index in the sorted array which is arrProps which index element is present
      cycleSize++;
    }

    // add the cycleSize to swap
    if (cycleSize > 1) {
      swap += cycleSize - 1;
    }

    //  doing liek this
    // visited[0] is false, and sortedArr[0].index = 7 (which is not 0) → start a cycle.

    // Cycle:

    // j = 0 → index = 7

    // mark visited[0] = true

    // go to j = 7 → index = 2

    // mark visited[7] = true

    // go to j = 2 → index = 6

    // mark visited[2] = true

    // go to j = 6 → index = 4

    // mark visited[6] = true

    // go to j = 4 → index = 9

    // mark visited[4] = true

    // go to j = 9 → index = 0

    // mark visited[9] = true

    // Now j = 0 is already visited → END cycle

    // ✅ Cycle Size = 6 → Swaps += 6 - 1 = 5

    // 🔁 i = 1
    // visited[1] is false, index = 5

    // Cycle:

    // j = 1 → index = 5

    // mark visited[1] = true

    // go to j = 5 → index = 8

    // mark visited[5] = true

    // go to j = 8 → index = 1

    // mark visited[8] = true

    // now j = 1 is visited → END

    // ✅ Cycle Size = 3 → Swaps += 3 - 1 = 2

    // 🔁 i = 2
    // visited[2] = true → skip

    // 🔁 i = 3
    // sortedArr[3].index = 3, and visited[3] = false → already in correct position
    // ✅ skip

    // 🔁 i = 4
    // visited[4] = true → skip

    // 🔁 i = 5
    // visited[5] = true → skip

    // 🔁 i = 6
    // visited[6] = true → skip

    // 🔁 i = 7
    // visited[7] = true → skip

    // 🔁 i = 8
    // visited[8] = true → skip

    // 🔁 i = 9
    // visited[9] = true → skip

    // ✅ Final Total Swaps:
    // Cycle 1 (size 6): 5 swaps

    // Cycle 2 (size 3): 2 swaps

    // All others are in place or visited

    // Total = 5 + 2 = 7 swaps
    // if not visited the index
  }

  return swap;
}

// console.log(minSwaps([2, 8, 5, 4]));


3. //Given an array of integers arr[]. You have to find the Inversion Count of the array. 
// Note : Inversion count is the number of pairs of elements (i, j) such that i < j and arr[i] > arr[j].

// Examples:

// Input: arr[] = [2, 4, 1, 3, 5]
// Output: 3
// Explanation: The sequence 2, 4, 1, 3, 5 has three inversions (2, 1), (4, 1), (4, 3).

 function inversionCount(arr) {
        let pair = { count: 0 };  // Object to track inversion count by reference
        mergeSort(arr, pair);
        return pair.count;
    }

   function mergeSort(arr, pair) {
        if (arr.length <= 1) return arr;

        let mid = Math.floor(arr.length / 2);
        let left =  mergeSort(arr.slice(0, mid), pair);
        let right = mergeSort(arr.slice(mid), pair);

        return merge(left, right, pair);
    }

  function  merge(left, right, pair) {
        let sortedArray = [];
        let i = 0, j = 0;

        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                sortedArray.push(left[i]);
                i++;
            } else {
                // Inversion: left[i] > right[j]
                pair.count += (left.length - i);
                sortedArray.push(right[j]);
                j++;
            }
        }

        // Append remaining elements
        while (i < left.length) {
            sortedArray.push(left[i]);
            i++;
        }

        while (j < right.length) {
            sortedArray.push(right[j]);
            j++;
        }

        return sortedArray;
    }
// console.log(inversionCount([2, 4, 1, 3, 5])); // Output: 3

// in this code we first divide the array into two parts and then sort the left and right array and then compare the left and right element if the left element is larger then the right element then we increase the pair count by the number of elements left in the left array because all those elements will be greater than the current right element. This way we can count inversions efficiently using merge sort.
// The time complexity of this algorithm is O(n log n) due to the merge sort,



4. //Given two sorted arrays a[] and b[] of size n and m respectively, the task is to merge them in sorted order without using any extra space. Modify a[] so that it contains the first n elements and modify b[] so that it contains the last m elements.

// Examples:

// Input: a[] = [2, 4, 7, 10], b[] = [2, 3]
// Output:
// [2, 2, 3, 4]
// [7, 10]
// Explanation: After merging the two non-decreasing arrays, we get, 2 2 3 4 7 10

function mergeTwoSortedArray(a , b){
        let n = a.length, m = b.length;
        let gap = Math.ceil((n + m) / 2);

        while (gap > 0) {
            let i = 0, j = gap;

            while (j < n + m) {
                // Get values from virtual combined array
                let val1 = (i < n) ? a[i] : b[i - n];
                let val2 = (j < n) ? a[j] : b[j - n];

                // Swap if needed
                if (val1 > val2) {
                    if (i < n && j < n) {
                        [a[i], a[j]] = [a[j], a[i]];
                    } else if (i < n && j >= n) {
                        [a[i], b[j - n]] = [b[j - n], a[i]];
                    } else {
                        [b[i - n], b[j - n]] = [b[j - n], b[i - n]];
                    }
                }

                i++;
                j++;
            }

            gap = (gap === 1) ? 0 : Math.ceil(gap / 2);
        }

        return [a, b];
  
}

console.log(mergeTwoSortedArray([1,5,9,10,15,20] , [2,3,8,13]));
