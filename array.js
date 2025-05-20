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

  let arr = [10,2,4,1,5];

  const secondLargestNumW = () => {
for (let i = 0; i < arr.length; i++) {                // o(n)
    
    let uniqueArray = Array.from(new Set(arr))

    uniqueArray.sort((a, b) =>  b-a)           // sort always have o(nlogn)

    if(uniqueArray.length >= 2){
      return uniqueArray[1]
    }else{
      return -1
    }
    
  }
  }
  
  // this logic has o(nlogn) time complexity
  // console.log(secondLargestNumW(arr))



// 1. FIND THE SECOND LARGEST NUMBER FROM AN ARRAY WITH OPTMIZATION



  let largest = arr[0]
  let secondLargest = arr[1]

  const secondLargestNum = (arr) => {
          for (let i = 0; i < arr.length; i++) {            // o(n)
             if(arr[i] > largest){
                secondLargest = largest
                largest = arr[i]
             }else if(arr[i] !== largest && arr[i] > secondLargest){
              secondLargest = arr[i]
             }
          }

          return secondLargest
   } 

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


  const rotateArrayOptmised = (arr , k) => {
    let size = arr.length

    if( size > k){
       k = k % size
    }

    reverseArray(arr , 0 ,arr.length - 1)
    reverseArray(arr , 0 ,k - 1)
    reverseArray(arr , k ,arr.length - 1 )

   return arr
  }

  const reverseArray= (arr , left , right) => {
          while(left <= right){
     temp = arr[left]
     arr[left++] = arr[right]
     arr[right--] = temp

   }
  }

  // time complexity of this code is o(n)
  // console.log(rotateArrayOptmised([1,2,3,4,5,6,7] , 3));
  

//  REMOVE DEPLICATE FROM AN SORTED ARRAY  IN ASCENDING ORDER 

// non optimised way 
 const removeDuplicate = (arr) => {
   console.log(arr.splice(3 , 2))
     let number = 0
     let start = 1
     let duplicate = arr[start]
     
     for (let i = 0; i < arr.length; i++) {
        if(arr[i] == duplicate){
           arr.slice
        }
      
     }
 }

 console.log(removeDuplicate([1,1,2,3,4,4,5]))