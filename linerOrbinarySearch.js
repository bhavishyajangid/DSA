// liner search are always work in one way its find the element from one side like to right to left  but it take more time then the binary search

// ******************************* binary search *****************

// binary search is more effiecnt rather then the liner search is reduce the time of the code

// NOTE : = this algo only work  when the data is formated in ascending order or descending order rather then this is algorith is not working

//  let root = Math.floor((3+5) / 2)
//  console.log(root);

function findPair(arr, x) {
  // code here
  arr.sort((a, b) => a - b);
  console.log(arr);

  let i = 0;
  let j = 1;

  while (i < arr.length && j < arr.length) {
    if (arr[j] - arr[i] == x) {
      return true;
    } else if (arr[j] - arr[i] < x) {
      j++;
    } else {
      i++;
    }
  }

  return false;
}

// console.log(findPair([5, 20, 3, 2, 5, 80] , 78));

2; // Given an array of integers arr[] that is first strictly increasing and then maybe strictly decreasing, find the bitonic point, that is the maximum element in the array.
// Bitonic Point is a point before which elements are strictly increasing and after which elements are strictly decreasing.

// Note: It is guaranteed that the array contains exactly one bitonic point.

function findMaximum(arr) {
  // your code here
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[end]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return arr[start];
}

//  console.log(findMaximum([1,2,4,5,7,8,3]));

3; // here first we check if the mid element is greter than the next elemnt or greter then the end elemnt if yes then start from the end if not then increase the start and in the last return the arr[start]

function findClosest(arr, k) {
  // code here
  let start = 0;
  let end = arr.length - 1;
  let closest = arr[0]; // assume first element is closest initially

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    let currentDiff = Math.abs(arr[mid] - k);
    let closestDiff = Math.abs(closest - k);

    console.log(currentDiff, closestDiff, closest, arr[mid]);

    if (currentDiff < closestDiff) {
      closest = arr[mid];
    }
    // 💡 If same distance, prefer the **bigger** one
    else if (currentDiff === closestDiff && arr[mid] > closest) {
      closest = arr[mid];
    }

    if (arr[mid] < k) {
      start = mid + 1;
    } else if (arr[mid] > k) {
      end = mid - 1;
    } else {
      return arr[mid]; // Exact match
    }
  }

  return closest;
}

// console.log(findClosest( [4, 5, 5, 6, 8, 12, 14, 16, 16, 19] , 10));

4; //  Given a sorted array with possibly duplicate elements. The task is to find indexes of first and last occurrences of an element X in the given array.

// Note: If the element is not present in the array return {-1,-1} as pair.

class Solution {
  indexes(v, x) {
    // code here
    let first = this.findFirst(v, x);
    let last = this.findLast(v, x);

    // if first element is -1 then no elemnt present in this array become the starting index is not present then how we find the last index
    if (first === -1) return [-1, -1];

    return [first, last];
  }

  findFirst(arr, x) {
    let start = 0,
      end = arr.length - 1;
    let first = -1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      // in this first we find the first start index
      if (arr[mid] === x) {
        first = mid;
        end = mid - 1; // Keep going left
      } else if (arr[mid] < x) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    return first;
  }

  findLast(arr, x) {
    let start = 0,
      end = arr.length - 1;
    let last = -1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      // here we find the last index of the x
      if (arr[mid] === x) {
        last = mid;
        start = mid + 1; // Keep going right
      } else if (arr[mid] < x) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    return last;
  }
}

let b1 = new Solution();
// console.log(b1.indexes([1, 3, 5, 5, 5, 5, 67, 123, 125] , 5));

5; // Given an integer array a[] of size n, find the highest element of the array. The array will either be strictly increasing or strictly increasing and then strictly decreasing.

function findHigest(arr) {
  let start = 0;
  let end = arr.length - 1;
  let high = arr[0];

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    console.log(arr[mid], start, end, high);

    // first we check if we select the high value default arr[0] is not eqal to the arr[mid] if true then we start from its next index
    // ex : [5,8]  this condition for this question
    if (arr[mid] == high) {
      start = mid + 1;
    }
    // then here we check if our mid element is smaller than the high element we start from next form the mid element
    else if (arr[mid] < high) {
      start = mid + 1;
    } else {
      // here if the mid element is big but its next element is also bigger then this so start after it
      if (arr[mid + 1] > arr[mid]) {
        start = mid + 1;
      } else {
        // here if the element is high and no high elemnt present after it we check its left side and start before it and set the high value
        end = mid - 1;
        high = arr[mid];
      }
    }
  }

  return high;
}

// console.log(findHigest([1, 2, 3, 4, 5, 6, 5 ,4 ,3, 2 ,1]));

6; // Given an array of distinct elements which was initially sorted. This array may be rotated at some unknown point. The task is to find the minimum element in the given sorted and rotated array.

function minElement(arr) {
  let start = 0;
  let end = arr.length - 1;
  let min = arr[0];

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] == min) {
      start = mid + 1;
    } else if (arr[mid] < min) {
      if (arr[mid - 1] < min) {
        end = mid - 1;
      } else {
        start = mid + 1;
        min = arr[mid];
      }
      min = arr[mid];
    } else {
      start = mid + 1;
    }
  }

  return min;
}

// console.log(minElement([3, 4, 5, 1, 2]));

7; // You are given the arrival times arr[] and departure times dep[] of all trains that arrive at a railway station on the same day. Your task is to determine the minimum number of platforms required at the station to ensure that no train is kept waiting.

// At any given time, the same platform cannot be used for both the arrival of one train and the departure of another. Therefore, when two trains arrive at the same time, or when one arrives before another departs, additional platforms are required to accommodate both trains.

// Examples:

// Input: arr[] = [900, 940, 950, 1100, 1500, 1800], dep[] = [910, 1200, 1120, 1130, 1900, 2000]
// Output: 3
// Explanation: There are three trains during the time 9:40 to 12:00. So we need a minimum of 3 platforms.

function trainTime(arr, dep) {
  // THIS IS CORRECT BUT NOT ACCURATE BECAUSE THIS IS NOT TRANK THE TRAIN IS CURRENTLY STAND ON THE PLATEFORM OR NOT SO
  // arr.sort((a , b) => a-b)
  // dep.sort((a,b) => a-b)
  //   let plateform = 0
  //   let trainStandTime = 0

  //   for (let i = 0; i < arr.length - 1; i++) {
  //     let arrival = arr[i + 1]
  //     let depa = dep[i + 1]

  //     if(arrival < dep[i]){
  //       plateform += 1
  //       if(depa > dep[i]){
  //         trainStandTime = depa
  //       }else{
  //         trainStandTime = arrival
  //       }
  //    }else{
  //      if(trainStandTime  > arrival){
  //        plateform += 1
  //      }else{
  //        trainStandTime = 0
  //      }
  //    }

  //    console.log(plateform , arr[i] , dep[i] , arrival , depa , trainStandTime);

  //   }

  //   return plateform

  //CORRECT WAY THIS ALSO STORE THE TRAIN STAND ON THE PALEFORM RIGHT NOW
  arr.sort((a, b) => a - b);
  dep.sort((a, b) => a - b);

  let n = arr.length;
  let platform_needed = 1;
  let max_platforms = 1;

  let i = 1,
    j = 0;

  while (i < n && j < n) {
    // If next train arrives before the earliest departure → need new platform
    if (arr[i] <= dep[j]) {
      platform_needed++;
      i++;
    } else {
      // Else one train has departed → free one platform
      platform_needed--;
      j++;
    }

    max_platforms = Math.max(max_platforms, platform_needed);
  }

  return max_platforms;
}

// console.log(trainTime([900, 940, 950, 1100, 1500, 1800] , [910, 1200, 1120, 1130, 1900, 2000]));

8; // Given a sorted array arr[] and a number target, the task is to find the lower bound of the target in this given array. The lower bound of a number is defined as the smallest index in the sorted array where the element is greater than or equal to the given number.

// Note: If all the elements in the given array are smaller than the target, the lower bound will be the length of the array.

// Examples :

// Input:  arr[] = [2, 3, 7, 10, 11, 11, 25], target = 9
// Output: 3
// Explanation: 3 is the smallest index in arr[] where element (arr[3] = 10) is greater than or equal to 9.

function findLowerBound(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let index = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] >= target) {
      if (arr[mid - 1] >= target) {
        end = mid - 1;
        index = mid;
      } else {
        return mid;
      }
    } else if (arr[mid] < target) {
      start = mid + 1;
    }
  }

  if (index > 0) {
    return index;
  } else {
    return arr.length;
  }
}

// console.log(findLowerBound([2, 3, 7, 10, 11, 11, 25] , 100));

9; // Given a sorted array of distinct positive integers arr[], we need to find the kth positive number that is missing from arr[].

// Examples :

// Input: arr[] = [2, 3, 4, 7, 11], k = 5
// Output: 9
// Explanation: Missing are 1, 5, 6, 8, 9, 10… and 5th missing number is 9.

function kthMissing(arr, k) {
  // code here

  let start = 1;
  let i = 0;
  let count = 0;

  while (true) {
    //counting start with 1 so we check if the first element is 1 or not if then we count it and incase our start when its match we new it this is element present so we skip it other non present number we count it
    if (i < arr.length && arr[i] === start) {
      i++;
    } else {
      count++;
      if (count == k) return start;
    }

    start++;
  }
}

// console.log(kthMissing([2, 3, 4, 7, 11], 5));


10 // Given an array of n distinct elements. Check whether the given array is a k-sorted array or not. A k-sorted array is an array where each element is at most k distance away from its target position in the sorted array. 
// Return "Yes" if the array is a k-sorted array else return "No".

// Examples

// Input: n=6, arr[] = {3, 2, 1, 5, 6, 4}, k = 2
// Output: Yes
// Explanation: Every element is at most 2 distance away from its target position in thesorted array.

function findIndex(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

function kthSorted(arr, k) {
  let arr1 = [...arr];
  let arr2 = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = findIndex(arr2, arr1[i]);

    if (Math.abs(correctIndex - i) > k) {
      return "No";
    }
  }
  return "Yes";
}

// console.log(kthSorted([3, 2, 1, 5, 6, 4], 2));

11 //. You are given two unsorted arrays a[] and b[]. Both arrays may contain duplicate elements. For each element in a[], your task is to count how many elements in b[] are less than or equal to that element.

// Examples:

// Input: a[] = [4, 8, 7, 5, 1], b[] = [4, 48, 3, 0, 1, 1, 5]
// Output: [5, 6, 6, 6, 3]
// Explanation: 
// For a[0] = 4, there are 5 elements in b (4, 3, 0, 1, 1) that are ≤ 4.
// For a[1] = 8 and a[2] = 7, there are 6 elements in b that are ≤ 8 and ≤ 7.
// For a[3] = 5, there are 6 elements in b that are ≤ 5.
// For a[4] = 1, there are 3 elements in b (0, 1, 1) that are ≤ 1.




function findSmallestNumber(arr , target){
 let start = 0;
    let end = arr.length - 1;
    let ans = 0;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (arr[mid] <= target) {
        ans = mid + 1; // Because we're counting (0-based index)
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    return ans;
}


function countLessEq(arr, brr) {
        // code here
        let result = []
       let sortArr = brr.sort((a, b) => a-b)
 
       for (let i = 0; i < arr.length; i++) {
        let number = findSmallestNumber(sortArr , arr[i])
         result.push(number)
       }
 
       return result
        
    }

    // console.log(countLessEq([85 ,54 ,60 ,75 ,76 ,89 ,70 ,41 ,89],   [68, 31, 72, 10, 41, 33, 43, 24, 28, 49, 24, 75, 90, 68, 17, 41, 5]));
    
    
  12 // . Given two arrays a[] and b[], your task is to determine whether b[] is a subset of a[].

// Examples:

// Input: a[] = [11, 7, 1, 13, 21, 3, 7, 3], b[] = [11, 3, 7, 1, 7]
// Output: true
// Explanation: b[] is a subset of a[]

 function isSubset(a, b) {
        let freq = {};

        // Build frequency map of array A
        for (let i = 0; i < a.length; i++) {
            freq[a[i]] = (freq[a[i]] || 0) + 1;
        }

        // Check elements of B
        for (let i = 0; i < b.length; i++) {
            if (!freq[b[i]]) {
                return false; // element not found or used up
            }
            freq[b[i]]--;
        }

        return true;
    }

    // console.log(isSubset([11, 7, 1, 13, 21, 3, 7, 3] , [11, 3, 7, 1, 7]));


    13.// Given a sorted array arr and an integer k, find the position(0-based indexing) at which k is present in the array using binary search.

// Note: If multiple occurrences are there, please return the smallest index.
// Input: arr[] = [1, 2, 3, 4, 5], k = 4
// Output: 3
// Explanation: 4 appears at index 3.

 function binarysearch(arr, k) {
        // Code Here
        let start = 0
        let end = arr.length - 1
        
        while(start <= end){
            let mid = Math.floor((start + end) /2)
            
            if(arr[mid] < k){
                start = mid+ 1
            }else{
                if(arr[mid] == k){
                    if(arr[mid -1] == k){
                        end = mid - 1
                    }else{
                        return mid
                    }
                }
                end = mid - 1
            }
        }
        return -1
    }
    
    // console.log(binarysearch([1, 2, 3, 4, 5] , 4));
    
 14  // Given a sorted array arr[] and an integer x, find the index (0-based) of the largest element in arr[] that is less than or equal to x. This element is called the floor of x. If such an element does not exist, return -1.

// Note: In case of multiple occurrences of ceil of x, return the index of the last occurrence.

// Examples

// Input: arr[] = [1, 2, 8, 10, 10, 12, 19], x = 5
// Output: 1
// Explanation: Largest number less than or equal to 5 is 2, whose index is 1.

 function findFloor(arr, x) {
        // your code here
        let start = 0
        let end = arr.length - 1
        let findIndex = -1
        
        while(start <= end){
           let mid = Math.floor((start + end) /2 )
           
           if(arr[mid] == x){
               findIndex = mid
               start = mid + 1
           }else if(arr[mid] < x){
               findIndex = mid
               start = mid + 1
           }else{
               end = mid  -1
           }
        }
        return findIndex
    }
    console.log(findFloor([1, 2, 8, 10, 10, 12, 19] , 5));
    