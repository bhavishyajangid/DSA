// liner search are always work in one way its find the element from one side like to right to left  but it take more time then the binary search

// ******************************* binary search *****************

// binary search is more effiecnt rather then the liner search is reduce the time of the code 

// NOTE : = this algo only work  when the data is formated in ascending order or descending order rather then this is algorith is not working 


//  let root = Math.floor((3+5) / 2)
//  console.log(root);


   function findPair(arr, x) {
        // code here
        arr.sort((a , b) => a - b)
        console.log(arr);
        
        let i = 0
        let j = 1
       
        while(i < arr.length  && j < arr.length){
    
            if(arr[j] - arr[i] == x){
                return true
            }
            else if(arr[j] - arr[i] < x){
                j++
            }else{
                i++
            }
           
        }
        
        return false
        
    }
 
    // console.log(findPair([5, 20, 3, 2, 5, 80] , 78));


    2. // Given an array of integers arr[] that is first strictly increasing and then maybe strictly decreasing, find the bitonic point, that is the maximum element in the array.
// Bitonic Point is a point before which elements are strictly increasing and after which elements are strictly decreasing.

// Note: It is guaranteed that the array contains exactly one bitonic point.

   function findMaximum(arr) {
        // your code here
   let start = 0
   let end = arr.length - 1
   
   
   while(start < end){
       let mid = Math.floor((start + end) / 2)
       
       
       if(arr[mid] > arr[mid + 1] && arr[mid] > arr[end]){
           end = mid
       }else {
           start = mid + 1
       }
       
   }
   return arr[start]
    }
    
    
//  console.log(findMaximum([1,2,4,5,7,8,3]));
 // here first we check if the mid element is greter than the next elemnt or greter then the end elemnt if yes then start from the end if not then increase the start and in the last return the arr[start] 
 

  function findClosest(arr, k) {
        // code here
let start = 0;
    let end = arr.length - 1;
    let closest = arr[0]; // assume first element is closest initially

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        let currentDiff = Math.abs(arr[mid] - k);
        let closestDiff = Math.abs(closest - k);

        console.log(currentDiff ,closestDiff , closest ,arr[mid]);
        

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

    console.log(findClosest( [4, 5, 5, 6, 8, 12, 14, 16, 16, 19] , 10));
    