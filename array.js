// let arr = []          // we declare the array like this in js 


// note : -   array index is start from 0 but the length start from 1



// ***********************methods of array*****************

// 1.  push : -   add a element to the last of the array 
// 2.  pop  : -   remove last element in the array 
// 3. unshift : - add a elemetn to the starting of the array 
// 4. shift : -   remove first element in the array 


// *********************loops ***********************

// let arr = [1,2,3,4,5,]

 // this add 2 in every item of the array and return a new array 
// 1. map :-  arr.map((item) => item+2) 


 // it will return only item which satisfy this condition 
//2. filter : - arr.filter((item) => item > 3) 

// some it similar like filter diffrence between the filter return all the element which satisfy the condition but the some return true or false it the condition is match 

// 3. some : - arr.some((item) => item > 3 )


//  every find it the every element is satisfy the condtion it return true else false 
// 4. every : -  arr.every((item) => item > 3)  


//find return the element if the condition satisify it one element satisify the condition it return undefined
// 5. find : - arr.find((item) => item > 3 )


//6. concate : - add two or more array 
//   ex : -  arr.concate(arr2)


// 7. slice : -  it give a certain element slice from the array like it take two arguments first starting and ending element it print the element between of this arguments

//ex : - const newArr =  arr.slice(0 , 2)   // [1,2] this will print the element between the 0 to 2 index 


//8. splice : - splice remove the element between to the arguments and add new element which are provided by you

// ex :   const arre = arr.splice(1, 2, "10")   // [1, "10" , 4,]
//        const arre = arr.splice(starting , no of element you want to remove , new element )

//9. fill : - fill method replace all the element by your given arguments 

// ex : -    arr.fill(0)        // [0,0,0,] is replace all the element with 0
//           arr.fill(0 , 2)    // it start from 2 index and replace all the elements with 0 after the 2 index


// 10. findIndex : -   find the index of the Element
// ex : -   arr.findIndex((item) => item == 2)      // print 1 

// 11. flat : it flat nested array into one array if we dont provide a value to it it flat only first level array 
// ex : -   let arr = [1,2,[4,5],6,7,[8,9[10,11]]]
//          arr.flat()        // this will give [1,2,4,5,6,7,8,9[10,11]]
//          arr.flat(2)        // this will give [1,2,4,5,6,7,8,9,10,11]

// 12. reverse : - this reverse the array 
//13.  sort : -  this sort the array according to the asecending or decending 
//  ex : -  let arr = [5,87,8,5,5,9,52,,58,];
//         arr.sort((a, b) => a - b )       // this sort for ascending order
//         arr.sort((a, b) => b-a )       // this sort for decending order




// ************************ SPREAD OR REST OPERATOR *************

// 1. spread operator : -    spread operator it used to spread the elements of the array like if we have two array and we need to merge it and make a single array so we spread this array into new array using sread operator it share all the elements to the array where we spread we use spread operator using three dot

//ex :  -   
//  let arr = [1,2,3]
//  let arr2 = [4,5,6]

// const finalarr = [...arr , ...arr2]           // we got [1,2,3,4,5,6]


// 2. rest operator : -  rest operator is same as spread but of we use this techenique in the funcation so it called rest operator

//   const funcation add(...number){
//       return number
//   }                                  // in this funcation we dont know how  much arry provided so we use rest opeartor and it gives us a singe array 

//   console.log(add(arr , arr2))



// ***************** QUESTION **********************

// 1. FIND THE SECOND LARGEST NUMBER FROM AN ARRAY WITHOUT OPTMIZATION

  // let arr = [10,2,4,1,5];

//   const secondLargestNumW = () => {
// for (let i = 0; i < arr.length; i++) {                // o(n)
    
//     let uniqueArray = Array.from(new Set(arr))

//     uniqueArray.sort((a, b) =>  b-a)           // sort always have o(nlogn)

//     if(uniqueArray.length >= 2){
//       return uniqueArray[1]
//     }else{
//       return -1
//     }
    
//   }
//   }
  
  // this logic has o(nlogn) time complexity
  // console.log(secondLargestNumW(arr))



// 1. FIND THE SECOND LARGEST NUMBER FROM AN ARRAY WITH OPTMIZATION



  // let largest = arr[0]
  // let secondLargest = arr[1]

  // const secondLargestNum = (arr) => {
  //         for (let i = 0; i < arr.length; i++) {            // o(n)
  //            if(arr[i] > largest){
  //               secondLargest = largest
  //               largest = arr[i]
  //            }else if(arr[i] !== largest && arr[i] > secondLargest){
  //             secondLargest = arr[i]
  //            }
  //         }

  //         return secondLargest
  //  } 

   // this logic has o(n) time complexity so this is optimize than the first logic  
  //  console.log(secondLargestNum(arr))



// 2. rotate the array element to the right by k step 

  // let array = [10,2,8,4,7,5,9,6];

  // const rotateArray = (arr , times) => {

  //   let size  = arr.length
  //   let newarray = arr.slice(size - times , size)        // o(n)
  //    let arrr = [...newarray , ...arr ]
     
  //    return arrr
      
  // }

  // // this logic have o(n) time complexity
  // console.log(rotateArray(array , 5))


// NOW DOING WITHOUT THE INBUILT METHOD OF THE ARRAY 


  // const rotateArrayOptmised = (arr , k) => {
  //   let size = arr.length

  //   if( size > k){
  //      k = k % size
  //   }

  //   reverseArray(arr , 0 ,arr.length - 1)
  //   reverseArray(arr , 0 ,k - 1)
  //   reverseArray(arr , k ,arr.length - 1 )

  //  return arr
  // }

  // const reverseArray= (arr , left , right) => {
  //         while(left <= right){
  //    temp = arr[left]
  //    arr[left++] = arr[right]
  //    arr[right--] = temp

  //  }
  // }

  // time complexity of this code is o(n)
  // console.log(rotateArrayOptmised([1,2,3,4,5,6,7] , 3));
  

// 3.   REMOVE DEPLICATE FROM AN SORTED ARRAY  IN ASCENDING ORDER 

// non optimised way 
//  const removeDuplicate = (arr) => {
//    console.log(arr.splice(3 , 2))
//      let number = 0
//      let start = 1
//      let duplicate = arr[start]
     
//      for (let i = 0; i < arr.length; i++) {
//         if(arr[i] == duplicate){
//            arr.slice
//         }
      
//      }
//  }

//  console.log(removeDuplicate([1,1,2,3,4,4,5]))

// 4 .  You are given an array called arr[] that has n - 1 numbers.
//      These numbers are all different, and they are in the range from 1 to n.

// That means:

// You should have had n numbers total.

// But one number is missing.

// Your task is to find the missing number.

// first lets descious unoptimized way \


    //  let arr = [1,2,4,5]
    //  let biggest = arr[0];
    //  let missingNumber = 0;
// const array = new Array(biggest).fill(false); 
//      const findMissingNumber = (arr , array) => {
//         for (var k = 0; k < arr.length; k++) {
//             if (arr[k] > biggest) {
//                 biggest = arr[k];
//             }
//         }

//         for (var j = 0; j < arr.length; j++) {
//             array[arr[j] - 1] = true;
//         }

//         for (var m = 0; m < array.length; m++) {
//             if (!array[m]) {
//                 missingNumber = m + 1;
//                 break; // Optional: stop once found
//             }
//         }

//         return missingNumber;
//       }

      // console.log(findMissingNumber(arr , array))


  // ****************** OPTIMISED WAY ***************
  
//   function findMissingNumber(arr) {
//     let n = arr.length + 1;
//     let expectedSum = (n * (n + 1)) / 2;
//     let actualSum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         actualSum += arr[i];
//     }

//     return expectedSum - actualSum;
// }
// console.log(findMissingNumber([1, 2, 4, 5])); // Output: 3


// 5.  MOVE ALL THE ZERO TO THE RIGHT 

// UNOPTIMISED WAY 

// let arr = [0, 1, 0, 3, 12]
// let index = 0
// let i = 0
// while (index < arr.length -1) {
//  if(arr[index] == 0){
//   if(arr[index + 1] !== 0){
//  let temp = arr[index + 1]
//     arr[index+1] = arr[i]
//     arr[i] = temp
//     i++
//   }
   
//  }else{
// i++
//  }
//   index += 1
  
// }
// console.log(arr);


// OPTMISED WAY 
// let arr = [1,2,0,4,0,0,5,0,8];
// let i = 0;

// for (let j = 0; j < arr.length; j++) {
//   if (arr[j] !== 0) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//   }
// }
// console.log(arr);

// 6.  REVERSE AN ARRAY 
// UNOPTIMISED WAY 
  //  let arr = [1,2,3,4,5]
  //  arr.reverse()
  //  console.log(arr);

// OPTMISED WAY
// let arr = [1,2,3,4,5]
// let j = 0
// for(let i = arr.length -1 ; i > j ; i-- , j++ ){
//           let temp  = arr[j]
//           arr[j] = arr[i]
//           arr[i] = temp
              
//         }
//         console.log(arr);

// 7. set the starting element to the back n time 
// let arr= [1, 2, 3, 4, 5]
// let d = 3   
// let index = arr.length - 1
//  let number = Math.floor( d%arr.length) 
// console.log(number);
// let j = 0

        
//         for(let i = arr.length - 1 ;  i > j  ; i-- , j++ ){
//             let temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//         }
//         console.log(arr , 'first');
//         j = 0

        
        
//         for (let k = index - d ; k > j  ; k-- , j++) {
//           let temp = arr[k]
//           arr[k] = arr[j]
//           arr[j] = temp
          
//         }
        
//         console.log(arr , 'second');

        

//         for (let m = arr.length - 1 ; m > number ; m-- , number++) {
//             let temp = arr[number]
//             arr[number] = arr[m]
//             arr[m] = temp
          
//         }
    

      
        
//    console.log(arr , 'third');

// 8. You are given an array arr of positive integers. Your task is to find all the leaders in the array. An element is considered a leader if it is greater than or equal to all elements to its right. The rightmost element is always a leade

// unoptmised

//  let arr = [16, 17, 4, 3, 5, 2]
//  let index = 1;
//  let indexfor = 0


//  const largestRight  = (arr , index , indexfor) => {

//    for (let i = 0; i < arr.length - 1  ;) {
    
//    let leader = false
     
//      if(arr[i] >= arr[index]){
       
//        leader = true
//        console.log(arr[i] , arr[index]  , index,  'biggest');
//      index++

//    }else{
//      console.log("else" , arr[i] , arr[index]);
//     i++
//     index = i + 1
    
    
//    }

//    if(index > arr.length - 1 && leader){
//      console.log("biggest element is " , arr[i] , index , leader); 
//      arr[indexfor] = arr[i]
//     i++
//     index = i+ 1
//     indexfor++
   
//   }
  


    
    
//    }
//         arr[indexfor] = arr[arr.length - 1];
//         indexfor++
//    arr.length = indexfor
//    return arr
//  }
//    console.log(largestRight(arr , index , indexfor));
   

// optmised
// let arr =[10, 4, 2, 4, 1]
//     let n = arr.length
//     let maxRight = arr[n-1]
//     let index = n - 1
// function findLeaders(arr) {
//     for(let i = n - 2 ; i >= 0 ; i--){
//        if(arr[i] >= maxRight){
//           maxRight = arr[i]
//           arr[--index] = arr[i]
//        }
//     }

//     let k = 0
//     for(let j = index ; j < n ; j++){
//       arr[k++] = arr[j]
//     }

//     arr.length = k
   
//      console.log(index);
     
//     return arr
// }

// console.log(findLeaders(arr))

// 9.  Given an array arr of integers, find all the elements that occur more than once in the array. If no element repeats, return an empty array.

// UNOPTIMISED WAY 
// let arr = [1 ,8 ,4, 3 ,6 ,9 ,5 ,7, 2, 7 ,0]

// const findDuplicate = (arr) => {
//    let index = 1
//    let duplicate = 0

//    for (let i = 0; i < arr.length -1 ;) {
//     if(arr[i]  == arr[index]){
//         arr[duplicate++] = arr[i]
//         i++
//         index = i + 1
//     }else{
//       index++
//     }

//      if(index >= arr.length){
//       console.log("reset" , arr[index] , index);
//       i++
//       index = i+1
//     }

//    }
//   arr.length = duplicate
   
//    return arr
// }

// console.log(findDuplicate(arr));

// OPTIMISED WAY 
// const findDuplicate = (arr) => {

//   let result = []
//      let freq = {}
     
//      for(let i = 0 ; i < arr.length ; i++){
//          let value = arr[i]
//        if(freq[value]){
//            freq[value] += 1 
//        }else{
//            freq[value] = 1
//        }
//      } 
//      for(let key in freq){
//          if (freq[key] > 1) {
//                 result.push(Number(key));
//             }
//      }
//      return result
//   }

//   console.log(findDuplicate(arr));


 10. // Given an array arr[]. Find the majority element in the array. If no majority element exists, return -1.

// Note: A majority element in an array is an element that appears strictly more than arr.size()/2 times in the array.

// Examples:

// Input: arr[] = [1, 1, 2, 1, 3, 5, 1]
// Output: 1
// Explanation: Since, 1 is present more than 7/2 times, so it is the majority element.

function majorityElement(arr) {
        // code here
        let quantity = {}
        
        for(let i = 0 ; i < arr.length ; i++){
             if(quantity[arr[i]]){
                 quantity[arr[i]] = quantity[arr[i]] + 1
             }else{
                 quantity[arr[i]] = 1
             }
             
        }


         for(let j = 0 ; j < arr.length ; j++){  
            if(quantity[arr[j]] > Math.floor(arr.length / 2)){
                return arr[j]
            }
        }
        
        return -1
    }

    // console.log(majorityElement([1, 1, 2, 1, 3, 5, 1]));
    
  
     
11. // Given an array arr[] and an integer k where k is smaller than the size of the array, your task is to find the kth smallest element in the given array.

// Follow up: Don't solve it using the inbuilt sort function.

// Examples :

// Input: arr[] = [7, 10, 4, 3, 20, 15], k = 3
// Output: 7
// Explanation: 3rd smallest element in the given array is 7.

function kthSmallest(arr, k) {
        // code here
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
             return arr[k-1]
    }
    console.log(kthSmallest([7, 10, 4, 3, 20, 15] , 3));
    
      