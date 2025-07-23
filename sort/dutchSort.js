// ******************** DUTCH NATIONAL FLAG PROBLEM ********************

// NOTE : - THIS ALGORITHM IS ONLY USED WHEN WE HAVE 3 SAME ELEMENTS IN THE ARRAY AND WE NEED TO SORT THEM LIKE IF WE HAVE [0,1,2,1,0,2,2,0,1] IN THIS ARRAY WE HAVE ONLY THREE ELEMENT 0,1,2, SO WE USE THIS ALGO 

 // TIME COMPLEXITY : - O(n)
 // SPACE COMPLEXITY : - O(1) because we are not using any extra space

// EX : - 
          function dutchNationalFlag(arr) {
              let mid = 0
              let low= 0
              let high = arr.length -1

              while(mid <= high){
                 if(arr[mid] == 0){
                    [arr[mid] , arr[low]] = [arr[low] , arr[mid]]
                    low++
                    mid++
                 }else if(arr[mid] == 1){
                     mid++
                 }else if(arr[mid] == 2){
                    [arr[mid] , arr[high]] = [arr[high] , arr[mid]]
                    high--
                 }
              }
              return arr
          }

          console.log(dutchNationalFlag([0,1,2,1,0,2,2,0,1])); // Output: [0,0,0,1,1,1,2,2,2]
          

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


