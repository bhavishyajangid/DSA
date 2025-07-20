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

// console.log(mergeSort([-3, 1, 0, -2]));



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

console.log(removeDuplicate([7, 1, 5, 3, 9] , [8, 4, 3, 5, 2, 6]));
