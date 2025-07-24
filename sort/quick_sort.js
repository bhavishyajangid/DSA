// ******************************* QUICK SORT IN JS ************************
// in the qucik sort algorithim first we take a pivot of the array the make two array left or right and loop it anc check if the element if larger then the pivot element we push it into right array if small we put into left like this every time we will get a pivot and we will do the same thing until we have only one element in the array then we will return the array

function quickSort(arr ) {
  if (arr.length <= 1) {
    return arr;
  }
                                        // O(n log n) time complexity
                                        // O(logn) space complexity
  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    console.log(pivot , arr[i] , left , right , arr);
    
    if (arr[i] < pivot) {
      console.log(pair , arr[i] , pivot , 'middle');
      
      left.push(arr[i]);
      pair += 1
    } else {
      right.push(arr[i]);
    }
  }
 
  
  
  
  return [...quickSort(left), pivot, ...quickSort(right )];  // here we call this fucation recursively so we do it again this provcess untile the array is sorted
}

console.log(quickSort([2, 4, 1, 5 , 3])); // Output: [1, 1, 2, 3, 6, 8, 10]


// ***************** THERE IS ANOTHER WAY TO DO THIS WITHOUT THE ARRAY ***********

 
function sortArray(arr){
    return quickSort2(arr)
}

function quickSort2(arr , start = 0 , end = arr.length -1) {
    if(start < end){
        const pivotIndex = pivot(arr , start , end);
        console.log(pivotIndex, 'run the left loop again ' , arr[pivotIndex - 1]);
        
        quickSort2(arr, start , pivotIndex -1 )

        console.log(pivotIndex, 'run the right loop again ' , arr[pivotIndex + 1]);
        quickSort2(arr, pivotIndex + 1 , end);
    }
    return arr
}

function pivot(arr, start = 0 , end = arr.length ){
    let pivot = arr[start]
    let swapIndex = start

    for (let i = start + 1; i < arr.length; i++) {
      console.log(pivot , arr[i] , swapIndex, arr ,'current element');
      if(pivot > arr[i]){
        console.log('true' ,  arr[i] , pivot , swapIndex);
        
        swapIndex++
        [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]]; // swap the elements
             console.log(arr , pivot , swapIndex , arr[i]);
             
        }
        
    }
    [arr[start] , arr[swapIndex]] = [arr[swapIndex], arr[start]]; // swap the pivot with the element at swapIndex
    console.log(arr);
    
    return swapIndex; // return the index of the pivot
}

// console.log(sortArray([5,4,3,10,2])); // Output: [1, 1, 2, 3, 6, 8, 10]



    