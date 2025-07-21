// **************************** MERGE SORT ********************

// in the merge sort first we divide the array into two parts from the mid then we first sort the left array and then sort right and at the last we comapre between the left array or right array element which is smaller and then oush into a new array and return this array lets code it 


function  mergeSort(arr){
  if(arr.length <=1) return arr

  let mid = Math.floor(arr.length / 2)
// console.log(mid);
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  console.log(left , right);

    return merge(left , right)

}

function merge(left , right){
    console.log('come in' ,left , right);
    
    let sortedArray = []
    while(left.length && right.length){
        if(left[0] < right[0]){
            sortedArray.push(left.shift())
        }else{
            sortedArray.push(right.shift())
        }
    }
    console.log('sort' , [...sortedArray , ...left , ...right]);
    
    return [...sortedArray , ...left , ...right]
}

// console.log(mergeSort([0, 1, 2, 0, 1, 2]));



// here we first divide the array into two parts and then store into the left and right how here  confusing part is when the left past store it call again the funcat,ion funcation call and again its calculate mid of the left array which is [8,3,5,4] and store into left which is [8,3] again call the funcaiton and calculate mid and now the array is [8,3] and store left of the mid is[8] now call again and here the condition if the arr.length <=1 then we go so now the length is small and return the left element [8] how the left funcation is call but the right is return because every time you calculate the left you call the mergersort and under the left is return then left is stop work but under the left right run or run every time when you calculate left like when we hit last case we have [8] for this funcation we return and go the right funcation and call so the [8] here the left element but the right is [3] and then again we call right funcaiton we have [5,4]and so on so first sort the left whole and after right whole array 


// check the pdf for more understanding which is in this folder


1  //. Given two arrays arr1[] and arr2[], return the merged array in ascending order containing unique elements.

// Examples:

// Input: arr1[] = [11, 1, 8], arr2[] = [10, 11]
// Output: [1, 8, 10, 11]
// Explanation: The ouput array after merging both the arrays and removing duplicates is [1, 8, 10, 11]

function removeDuplicate(arr1 , arr2){
     let arr = mergeSort([...arr1 , ...arr2])
     
    
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



2.// You are given an array of size N. Rearrange the given array in-place such that all the negative numbers occur before all non-negative numbers.
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

function sortElementNotChange(arr){
  if(arr.length <= 1) return arr

  let mid = arr.length / 2

  let left = sortElementNotChange(arr.slice(0 , mid))
  let right = sortElementNotChange(arr.slice(mid))

  return sortmerge(left , right)
}

function sortmerge(left , right){
  
  console.log(left , right , 'in');
  let sortedArray  = []
  while(left.length && right.length){
    console.log(left[0] , right[0] , sortedArray);
    
    if(left[0] < 0){
      sortedArray.push(left.shift())
    }else{
      if(left[0] > -1 && right[0] >-1){
        sortedArray.push(left.shift())
      }else{
        sortedArray.push(right.shift())
      }
    }
  }

  return [...sortedArray ,...left , ...right]
}

// console.log(sortElementNotChange([-5 ,-2, 3, -3,5, 5, -4]));


3.  //Count Inversions Using Merge Sort
// Problem:
// Count the number of inversions in the array.
// An inversion is a pair (i, j) such that i < j and arr[i] > arr[j].

// Input:
// arr = [8, 4, 2, 1]

// Output:
// 6

// Explanation:
// Inversions are: (8,4), (8,2), (8,1), (4,2), (4,1), (2,1)

function inversions(arr){
    if(arr.length <= 1) return arr
    let pair = 0

    let mid = Math.floor(arr.length / 2)
        console.log(mid , 'mid');
        
    let left = inversions(arr.slice(0, mid))
    let right = inversions(arr.slice(mid))

    return findPair(left , right , pair)

  }

  function findPair(left , right , pair){
     
     console.log('come in' ,left , right , pair);
    
    let sortedArray = []
    while(left.length && right.length){
        if(left[0] < right[0]){
    
            sortedArray.push(left.shift())
        }else{
          
            sortedArray.push(right.shift())
        }
    }
    console.log('sort' , [...sortedArray , ...left , ...right]);
    
    return [...sortedArray , ...left , ...right]
  }

  console.log(inversions([2, 4, 1, 3, 5]));
  