// ******************** DUTCH NATIONAL FLAG PROBLEM ********************

// NOTE : - THIS ALGORITHM IS ONLY USED WHEN WE HAVE 3 SAME ELEMENTS IN THE ARRAY AND WE NEED TO SORT THEM LIKE IF WE HAVE [0,1,2,1,0,2,2,0,1] IN THIS ARRAY WE HAVE ONLY THREE ELEMENT 0,1,2, SO WE USE THIS ALGO

// TIME COMPLEXITY : - O(n)
// SPACE COMPLEXITY : - O(1) because we are not using any extra space

// EX : -
function dutchNationalFlag(arr) {
  let mid = 0;
  let low = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] == 0) {
      [arr[mid], arr[low]] = [arr[low], arr[mid]];
      low++;
      mid++;
    } else if (arr[mid] == 1) {
      mid++;
    } else if (arr[mid] == 2) {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  return arr;
}

//  console.log(dutchNationalFlag([0,1,2,1,0,2,2,0,1])); // Output: [0,0,0,1,1,1,2,2,2]

// explanation : -

// we know thia array is unsorted and let we take three pionter or varible which track the low mid high element
//   LOW : -  low varible target the mid elememnt of the array which is 1 because 1 is mid element of the array not small not big

//   HIGH : = high target the largerst element in the array which is 2

//   MID : - mid not target the smallest varible mid target the current element of before the mid element all the smallest element are present because mid is start with 0 and also low start with 0  and when we get the smallest element we swap it with mid and increase the mid

// EXPLANATION : -
//   1. we start with low = 0 , mid = 0 , high = arr.length - 1
//   2. we check if the mid element is 0 then we swap it with low and increase both low and mid
//   3. if the mid element is 1 then we increase only mid
//   4. if the mid element is 2 then we swap it with high and decrease high
//   5. we repeat this process until mid is less than or equal to high

2; //Given an array and a range a, b. The task is to partition the array around the range such that the array is divided into three parts.
// 1) All elements smaller than a come first.
// 2) All elements in range a to b come next.
// 3) All elements greater than b appear in the end.
// The individual elements of three sets can appear in any order. You are required to return the modified array.

// Note: The generated output is true if you modify the given array successfully. Otherwise false.

// Geeky Challenge: Solve this problem in O(n) time complexity.

// Examples:

// Input: arr[] = [1, 2, 3, 3, 4], a = 1, b = 2
// Output: true
// Explanation: One possible arrangement is: {1, 2, 3, 3, 4}. If you return a valid arrangement, output will be true.
function threeWayPartition(arr, a, b) {
  // your code here
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] < a) {
      [arr[mid], arr[low]] = [[arr[low], arr[mid]]];
      low++;
      mid++;
    } else if (arr[mid] <= b) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  return arr;
}

//  console.log(threeWayPartition([1, 4, 3, 6, 2, 1], 1, 3)); // Output: [1, 2, 3, 4, 5] or similar partitioning based on the values of a and b

3; // Given an sorted array arr[] of integers. Sort the array into a wave-like array(In Place). In other words, arrange the elements into a sequence such that arr[1] >= arr[2] <= arr[3] >= arr[4] <= arr[5] ..... and so on. If there are multiple solutions, find the lexicographically smallest one.

// Note: The given array is sorted in ascending order, and modify the given array in-place without returning a new array.

// Examples:

// Input: arr[] = [1, 2, 3, 4, 5]
// Output: [2, 1, 4, 3, 5]
// Explanation: Array elements after sorting it in the waveform are 2, 1, 4, 3,

function sortInWave(arr) {
  if (arr.length < 1) {
    return arr;
  }
  // code here
  for (let i = 0; i < arr.length - 1; i += 2) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }
  return arr;
}

// console.log(sortInWave([1]));

function binSort(arr) {
        // code here
        let low = 0
        let mid = 0
        let high = arr.length -1

        while(mid < high){
         if(arr[mid] > 0){
             [arr[low] , arr[high]] = [arr[high] , arr[low]]
             high--
         }else if(arr[mid] == 0){
            low++
             mid++
         }
        }

        return arr
    }

    console.log(binSort( [1, 1, 1, 1]));
    
