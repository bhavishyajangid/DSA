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

// 1. FIND THE SECOND LARGEST NUMBER FROM AN ARRAY \

  let arr = [10,2,4,1,5];

  let index = 0
  let firstNumber = arr[0]
  let secondNumber = arr[1]

  arr.forEach((item) => {
     if(item > firstNumber){
         firstNumber = item
     }else{

     }
  })
