// ************************************ Time Complexity and o notation *******


 // 1. Time Complextiy : - mena measure in  how much time the code excute and which method is fast or which method is slow 
 
 
//  ex : -    const abcd(arr){
//           for (let i = 0; i < arr.length; i++) {              4 OPEARTION
//             if(i === 3){           
//                  return arr[i]
//             }
//           }
//  }

//     let array = [1,2,3,4,5,6]                                
//       console.log(abcd(array))




//   another Example : -   
//                       const  abcd(arr){
//                          return arr[3]                          1 OPEATION
//                       }
//                      let array = [1,2,3,4,5,6]
//                       console.log(abcd(array));


// you see in this example we return array of element 4 but i am for loop in the first code and in the second code we directly return arr of 4 so in this th etime complexity is less of code 2 because this only return arr of 4 rather than the first exmaple check every value but i need only 4 value so its time complexity is high 


//   ** NOTE :-      
                 //  TIME COMPELEXITY IS MAILY DEPEND ON HOW MUCH OPERATION IS DOING A CODE OR THE VALUE OF OPERATION IS CONSTENT  LIKE IN THE FIRST EXAMPLE THE CODE DOING 4 OPERATION BUT IN THE SECOND EXAMPLE THE CODE ONLY DOING ONE OPERATION AND IN FIRST EXAMPLE WHEN WE PASS A BIG ARRAY THE OPEARITON VALUE IS INCREASE BUT IN THE SECOND OPERATION VALUE DOES NOT CHANGE WHEATHER WE GIVING A BIG NUMBER THE OPERATION VALUE IS CONSTENT  



    // lets talk about on another example 

   // Ex : -   
            //  funcation sumOperation(n){
            //      return (n * (n + 5) / 2)                 3 OPEARTION
            //  }                                          O(1) TIME COMPELEXITY

           //  console.log(sumOperation(2));

    //  EXPLANING : - 
                       //  IN THIS CODE WE ARE DOING 3 OPERATION AND AFTER IT WE RETURN IT OR THIS CODE HAVE CONSTENT OPERATION LIKE IF YOU PROVIDE A NUMBER LIKE 2 IT DOING ONLY 3 OPERATION OR IF YOU PROVIDE 1000 IT DOING 3 OPERATION HIS OPERATION VALUE IS CONSTENT      



    //  Ex 2 : -  
     
    //          funcation sumOperation(n){
    //        console.log("going Forwarding")               5 OPERATION 

    //             for (let i = 0; i < n; i++) {           O(N) TIME COMPELEXITY
    //               console.log(i);
    //             }

    //             console.log("in the middle");
                

    //             for (let j = n - 1; j >= 0; i--) {
    //                 console.log(j);
    //               }

    //               console.log("ending");
                  
    //          }
     
    // EXPLAINING : - 
                        // IN THIS CODE WE HAVE TWO FOR LOOP AND I THREE CONSOLE THIS CODE DOING 5 OPERATION AND BUT THIS CODE DONT HAVE CONSTENT OPERATION MEAN IF WE PROVIDE 2 TO THIS CODE HIS OPERATION IS 5 BUT IF I PROVIDE A BIG VALUE THEN HIS OPERATION VALUE WILL BE CHANGED BECAUS OF THE LOOP BECAUSE LOOP RUN EVERY TIME 


    // RESULT : -   
                      // SO FROM THIS TWO EXAMPLE THE FIRST ONE HAVE GOOD TIME COMPLIXITY FIRST ONE HAVE O(1) TIME COMPLIXITY WHICH MEAN THIS OPERAITON VALUE IS CONSTENT DOESNT MATTER THE VALUE IS BIG OR SMALL IT DOING ONLY 3 OPERATION OR IN THE SECOND CODE HAVE 5 OPEARTION AND CHANGE DEPEND ON THE NUMBER OF GIVEN BELOW THE NUMBER IS BIG THE OPERTION VLAUE INCREASE SO CODE SECOND HAVE O(N) TIME COMPLIXITY BECAUSE THIS OPERATION DEPENDS ON THE NUMBER OF GIVEN BELOW 

    // O(1) : - THIS IS EXCELLENT  MEAN THE CODE IN WHICH THE OPEARTION VALUE IS CONSTENT HAVE O(1) TIME COMPLIXITY 
    
    // O(N) : - THIS IS BETTER MEAN THE CODE IN WHICH THE OPETAION IS DEPENDS ON THE NUMBER OF GIVEN BELOW HAVE O(N) COMPLIXITY

    // O(N^2) : THIS IS GOOD TIME COMPLEXITY 




    // 2.   funcation time(n){
    //     for (let i = 0; i < n; i++) {
    //        for (let j = 0; j < n j++) {
    //        console.log(i , j);
    //        }
            
    //     }
    // }

    // console.log(time(2));      

    // OUTPUT : -    
    
    //     if N = 2   0 , 0
    //                0 , 1               
    //                1 , 0
    //                1 , 1

        
    //     if N = 3   1,0
    //                1,1
    //                1,2
    //                2,0
    //                2,1
    //                2,2 


    // EXPLAINING : -  
                       // IN THIS CODE WE PRINT THE LOOP NUMBER FOR GIVEN NUMBER OR WHEN WE PROVIDE THE N IS 2 THE OPERATION VLAUE IS 4 OR WHEN WE PROVIDE N IS 3 THE OPERATION VALUE IS 9 SO THE OPERATION VLAUE CHANGE ACCORDING TO SQUARE 2 SQUARE IS 4 AND 3 SQUARE IS 9 SO THIS CODE HAS TIME COMPLEXITY O(N ^ 2) MEAN SQUARE OF N 

 // 
    
//  When is Time Complexity O(log n)?

// 🔁 Logarithmic time happens when the problem size is reduced in half (or by a factor) each time.

//     Scenario	Example(s)
// Binary Search	O(log n) — halve the search space
// Removing from Heap	O(log n) — down-heapify
// Inserting into Balanced BST	O(log n) — AVL Tree / Red-Black Tree
// Number of times loop divides n	while(n > 1) { n = n/2; }
  

//       EX : - 
               function binarySearch(arr, target) {         // OUTPUT : O(log n)
                      let start = 0, end = arr.length - 1;
                          while (start <= end) {
                          let mid = Math.floor((start + end) / 2);
                           if (arr[mid] === target) return mid;
                          else if (arr[mid] < target) start = mid + 1;
                           else end = mid - 1;
                          }
                             return -1;
              }

       // EXPLANATION :  IN THIS EXAMPLE WE DERATICALLY CHANGE THE VALUE OF ITERAION BECAUSE WE CHECK THE MID ELEMENT OF THE ARRAY IF ITS FIT TO CONDITION WE MAKE IT HALF AND AGAIN WE CALCULATE MID OF REMAIN ELEMENT THEN AGAIN IF FIT THEN HALF IT SO WHEN WE DO LIKE THIS ALWAYS HAVE LOG N TIME COMPLEXITY WHICH IS VERY GOOD 



//        When is Time Complexity O(n log n)?
// 🔁 Happens when you do a log n operation n times (e.g., sorting + divide and conquer)
// 📌 Common Scenarios:
// Scenario	Example(s)
// Merge Sort, Heap Sort, QuickSort(avg)	O(n log n) — divide and merge
// Building a Heap from Array	O(n log n) — each insert takes log n
// Sorting using PriorityQueue	O(n log n)
// Balanced BST Traversal	Each insert/search is log n, done n times


//     Ex : -  
                      function mergeSort(arr) {
                        if (arr.length <= 1) return arr;
                        let mid = Math.floor(arr.length / 2);
                        let left = mergeSort(arr.slice(0, mid));   // O(LOG N)
                         let right = mergeSort(arr.slice(mid));
                         return merge(left, right);
                       }

                             function merge(left, right) {
                                 let result = [], i = 0, j = 0;   // O(N)
                                    while (i < left.length && j < right.length) {                                           
                                 if (left[i] < right[j]) result.push(left[i++]);
                                   else result.push(right[j++]);
                                  }
                                  return [...result, ...left.slice(i), ...right.slice(j)];
                            }

                            //  TIME COMPLEXITY : - O(LOG N) + O(N) = O(N LOG N)

              // EXPLANATION : =  WHEN WE USE LOG N COMPLEXITY N TIME THE N LOG N TIME COMPLEXITY IS HAPPEN IN THIS CODE WE FIRST FIND THE ARR LEFT RIGHT THEN WE LOOP ACCORDING TO IT MEAN N TIME SO FIRST FUNCATION HAS LOG N TIME COMPLEXITY THEN THE SECOND HAS O(N) SO WHEN WE ADD IT O(N LOG N) TIME COMPLEXITY IS OCCUR


//               2. O(2n) — Linear Time

// O(2n) is just another way of saying O(n)

// 📌 Why?
// Because constants are ignored in Big-O notation.

// 2n means: Twice the work as n — but it's still linear growth.

// So:
// O(2n) = O(n)
// O(1000n) = O(n)

// 🧠 Example:
// js
// Copy
// Edit
// function printTwice(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }
// Time Complexity: O(2n) = O(n)



// 3.        O(2^n) — Exponential Time

// 📌 Meaning:
// The time (or number of operations) doubles with every additional input size.

// For n = 1 → 2¹ = 2

// For n = 2 → 2² = 4

// For n = 3 → 2³ = 8

// For n = 10 → 2¹⁰ = 1024 operations! ⚠️

// ⚠️ Very slow for large inputs.
// 🧠 Example Problems:
// Recursion with multiple calls (no caching)

// Subset generation / power set

// Recursive Fibonacci (without memoization)

// 📌 Example Code (Fibonacci):
// js
// Copy
// Edit
// function fib(n) {
//   if (n <= 1) return n;
//   return fib(n - 1) + fib(n - 2);  // 2 calls → exponential growth
// }
// Time Complexity: O(2^n)