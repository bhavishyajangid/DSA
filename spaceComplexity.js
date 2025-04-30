
// ********************** SPACE COMPLEXITY **************


// BOOLENA , NULL , UNDEFINED , NUMBER  == IT HAS CONSTENT SPACE COMPLEXITY
// OBJECT , ARRAY , STRING              ==  IT HAS DIFFRENT SPACE COMPLEXITY ACCORDING TO HIS LENGTH


// 1. SPACE COMPLEXITY : - 
                            //  space complexity mean how much space is occupied by the code in memory if is take more space then it has bad space complexity lets take a example 


   // ************************  O(1) SPACE COMPLEXITY *******************
                             
//    EX : -    const funcation sum(array){
//                 let sum = 0;
//               for (let i = 0; i < array.length; i++) {
//                    sum += array[i];
//               }      
              
//               return sum
// }

//          let score = [1,154,1654,5454]
//          console.log(sum(score))



//    EXPLAINATION : -    
                        // IN THIS EXAMPLE WE LOOP ON AN ARRAY AND ADD THE VALUE  OF THIS ARRAY AFTER I AM RETURN THE SUM OF THE VALUE IT HAS GOOD SPACE COMPLEXITY BECAUSE THIS FUNCATION ONLY RETURN A SINGAL VALUE AND THE SIGAL VALUE NOT OCCUPY MUCH SPACE IN THE MEMORY AND NOT DEPEND ON THE LENGHT OF THE ARRAY IT IF ARRAY LENGTH IS 100 RATHER THEN IT RETURN ONLY ONE VALUE SO IT HAS O(1) SPACE COMPLEXTIY


     // ************************  O(1) SPACE COMPLEXITY *******************

    // EX : -  
    //            funcation makeArray(n){
    //             let array = [];
    //              for (let i = 0; i < n; i++) {
    //                 array.push(i * 69);
    //              }

    //              return array
    //            }
    // console.log(makeArray(5));


    // EXPLAINATION : - 
                         //    IN THIS CODE I AM PROVIDE A NUMEBR AND THIS ACCORDING TO THIS NUMBER I AM MAKE AN ARRAY AFTER I AM RETURN THIS ARRAY SO THIS CODE HAS BAD TIME COMPLEXITY BECAUSE THIS RETURN AN ARRAY AND ARRAY OCCUPY MORE SPACE IN MEMORY ACCOEDING TO HIS LENGTH AND HIS SPACE COMPLEXITY IS TOTLY DEPEND ON THE N BECAUSE IF I AM INCREASE THE NUMBER THE ARRAY LENGTH MUST ME INCREASE OR IF ARRAY LENGHT INCREASE IF OCCUPY MORE SPACE SO IT HAS O(N) SPACE COMPLEXITY
    

      // ************************  O(N ^ 2) SPACE COMPLEXITY *******************

      // 2.   funcation space(n){
            // let array = []
    //     for (let i = 0; i < n; i++) {
            //  let array[i] = []
    //        for (let j = 0; j < n j++) {
    //          array[i][j] = i + j
    //        }
            
    //     }
    // }

    // console.log(space(2)); 


    // EXPLAINATION : - 
                          //THIS EXAMPLE HAS O(N ^ 2) SPACE COMPLEXITY BECAUSE IF I AM PASS 2 IF RETURN 4 ARRAY IF AM PASS 10 THEN IT RETURN 100 ARRAY 