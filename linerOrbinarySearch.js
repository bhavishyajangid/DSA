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
 
    console.log(findPair([5, 20, 3, 2, 5, 80] , 78));
    
 