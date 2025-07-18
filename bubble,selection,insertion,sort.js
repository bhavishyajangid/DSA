// ************************** BUBBLE SORT *********************


// in the bubble sort we check the array first element is greated then the its right element if its true then we swap both element and again check the element is greated then the first then swap if not then skip the elemnt and go to the next element 

// EX : -  
            let arr = [10,5,8,4,2,1]
                let n = arr.length
        
            // we go n-1 because if the arr has 5 element or we sort the 4 elment then the array is sort we dont need to sort the remain 1 so we go n-1 here
            for (let i = 0; i < n-1; i++) {   // O(n^2) time complexity
                // here i am go n-1-i mean when we check first element we need to check the 4 element in the array or after moving to the next element after we sort the second element but we need to do only 3 iteraton because before we sort one element so when the i increase mean we move to next element so we decrease the iteration 
               for (let j = 0; j < n-1-i ; j++) {
                if(arr[j] > arr[j+1]){
                    // if its big then swap
                    [arr[j] , arr[j+1]] = [arr[j+1] , arr[j]]
                }
                
               }
                
            }

            // console.log(arr);



// ***************************** SELECTION SORT ******************
 // in the selection sort first we select and element and then check this element is smaller then which element mean we find the smallerst number in the array and swap it with the current array so like select an element and then chek any smaller element is present in the array or if present then swap with 
 
//  EX : - 

let arr2 = [5,7,89,2,7,9,9]
function selectionSort(arr){         // O(n^2) time complexity
    let m = arr.length
    for (let i = 0; i < m-1; i++) {
        let minIndex = i
        for (let j = i + 1; j < m; j++) {
            if(arr[minIndex] > arr[j] ){
                 minIndex = j
            }
            
        }

        if(minIndex !== i){
            [arr[i] , arr[minIndex]] = [arr[minIndex] , arr[i]]
        }
        
    }
    return arr
}
            // console.log(selectionSort(arr2));


//  ************************ INSERTION SORT ***********************
// in the insertion sort we start from the the first element in the array and store the current element in the key varible and make a j varible which is i-1 mean the before element of the current elmenet then check if the before element means j is bigger then the current element if yes then we put j to the the current index and then j++ so now j is away from the current element if present then check the j is bigger the current if have then j+1 = j which mean we put the j to the its on its next index then check again if the j is not bigger then the key we stop excutataion and put the key varible on the j position and so on   

//  Ex : - 
           function insertionSort(arr){      // O(n^2) time complexity
             let n = arr.length
             for (let i = 1; i < n; i++) {
                let key = arr[i]
                let j = i-1

                while(j >=0 && arr[j] > key){
                             arr[j+1] = arr[j]
                             j--
                }

                arr[j+1] = key
                
             }
             return arr
           }
            console.log(insertionSort( [7, 10, 4, 3, 20, 15]));
            
            
// 1. sort and array wihtout using the javascript in build sort method on in o(n) time complexity

//  Note : - we dont use bubble , seletion , insertion sort because it has O(n^2) time complexity

let arr3 = [0,1,2,0,1,2]

function sortWithoutMethod(arr){
     let i = 0
     let sort = true

     while(i < arr.length - 1 ){
        if(arr[i] - arr[i + 1]  > 0){
      [arr[i] , arr[i+1]] = [arr[i+1], arr[i]]
       sort = false
      }

      if(i == arr.length-2 && !sort){
         i = 0
         sort = true
      }
      i++
 console.log(arr);
 
     }

     return arr
}
// console.log(sortWithoutMethod([1, 1, 1, 2 ,1 ,1 ,0 ,2 ,1 ,0]));


