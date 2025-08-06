// Strings in Javascript

// Creating Strings
const string = new String("Subscribe to RoadsideCoder!");

// using double quotes
const doubleQuote = "Subscribe to RoadsideCoder!"; 

// using single quotes
const singleQuote = 'RoadsideCoder!'; 

// using backticks
const backticks = `
Subscribe to RoadsideCoder! 
Like this Video
Share this video
`;

// Template Literals
const templateLiteral = `Subscribe to ${singleQuote}!`;

// Tagged Literals
console.log`hello ${"world"} how are ${"you"}`

// Tagged Literals Example function 
function test (string, youtubeChannel, person) {
		console.log(string,youtubeChannel, person)
    return;
}

const channel = "RoadsideCoder"
const name = "Piyush"
test`Subscribe to ${channel} run by ${name}`

// Strings length
const str = "Subscribe to RoadsideCoder!";
str.length

// Accessing Characters
str[3]
str.charAt(3)
 
// Looping
for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);  
}

// Modifying Strings
str[3] = "b" // can't do this
str.replace("s","b") // replaces first instance of that character or word
str.replaceAll("e","c")// replaces all instance of that character or word

str.concat(" and share this video") // joins 2 strings
const newStr = "    Hello  World    "
newStr.trim() // removes spaces from beginning and end

// Searching
str.indexOf("Coder") // index of a character or word's first appearance

str.lastIndexOf("e") // index of a character or word's last appearance
str.indexOf("e") // index of first appearance of "e"

str.startsWith("S")
str.endsWith("!")

// Extracting Substrings
str.substring(13, 26)
str.slice(-14, -1) 

// Converting Case
const toBeConverted = {name:"Piyush"}
String(toBeConverted) // [object Object]
JSON.stringify(toBeConverted) // '{"name":"Piyush"}'

str.toUpperCase() // converts to uppercase
str.toLowerCase() // converts to lowercase

str.charCodeAt(0) // returns ASCII Code
String.fromCharCode(65) // returns character from ASCII Code

// String Comparison
const str1 = "apple"
const str2 = "apple"

str1.localeCompare(str2) // compare strings

str.includes("Subscribe") // checks if a word exists inside a string

// Splitting and Joining Strings
str.split("e")

const arr = ["apple", "banana"]
arr.join(" and ")
 
// Ques 1 : Truncate the text
// Write a function called truncate that checks the length of a given string - str, and if
// it surpasses a specified maximum length, maxlength, it replaces the end of the string
// with the ellipsis character "..." so that the length matches the maximum length

// Input: str = "Subscribe to RoadsideCoder" , maxlength=9
// Output: "Subscribe…"

function truncate(str,maxlength) {
    if (str.length > maxlength)
        return str.slice(0, maxlength) + "..."
    else return str
}

// console.log(truncate("Subscribe to RoadsideCoder", 9));


// Ques 2 - Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

// Input: x = 121  ----->>>>>   Output: true
// Input: x = 10   ----->>>>>   Output: false

var isPalindrome = function (x) {
  return x < 0 ? false : x === +x.toString().split("").reverse().join("");
};

const res = isPalindrome(10);
// console.log(res);

// 121 => "121" => ["1","2","1"] => ["1","2","1"] => "121"


// Ques 3 : Hamming Distance
// Given two strings x and y, return the Hamming distance between them.

// Input: x = "hello", y = "hwllr"
// Output: 2
// Explanation:
//   (hello)
//   (hwllr)
//     ↑  ↑

function hammingDistance(x,y) {
    if (x.length !== y.length) {
        throw new Error("Strings must be of same length")
    }

    let distance = 0;

    for (let i = 0; i < x.length; i++){
        if (x[i] !== y[i]) {
            distance++
        }
    }

    return distance
}

// console.log(hammingDistance("hello","hwllr"));

// Variation 2: Given two integers x and y, return the Hamming distance between thier bits.

// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑

function hammingDistance(x, y) {
    x=x.toString(2)
    y=y.toString(2)

    if (x.length < y.length) {
        while(x.length!==y.length) x="0"+x
    } else {
         while(x.length!==y.length) y="0"+y
    }

    let distance = 0;

    for (let i = 0; i < x.length; i++){
        if (x[i] !== y[i]) {
            distance++
        }
    }

    return distance
}

// console.log(hammingDistance(2,9));

// Ques 4 - Valid Anagram
// An Anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase, using all the original letters exactly once.

// Input: (s = "anagram"), (t = "nagaram"); ----->>>>>   Output: true;
// Input: (s = "rat"), (t = "car");         ----->>>>>   Output: false;

// 1st Approach
const isAnagram1 = function (s, t) {
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");

  return s === t;
};

// anagram => [a,n,a,g,r,a,m] => [a,a,a,m,n,r] => aaamnr
// nagaram => [n,a,g,a,r,a,m] => [a,a,a,m,n,r] => aaamnr

const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
};

// console.log(isAnagram("anagram", "nagarm"));

// rat / tar

// {
//     r: 1,
//     a: 1,
//     t:1
// }

// {
//     t: 1,
//     a: 1,
//     r:1
// }

class Solution {
    // Function to reverse words in a given string.
    reverseWords(s) {
        s = s.trim().split()
        let str5 = ''
        
        for (let i = 0; i < s.length; i++) {
            if(arr[i] !== '' || ' '){
                str5 += arr[i]
            }
            
        }

        return str5
       
    }



    5.// Given a string s, your task is to find the longest palindromic substring within s.

// A substring is a contiguous sequence of characters within a string, defined as s[i...j] where 0 ≤ i ≤ j < len(s).

// A palindrome is a string that reads the same forward and backward. More formally, s is a palindrome if reverse(s) == s.

// Note: If there are multiple palindromic substrings with the same length, return the first occurrence of the longest palindromic substring from left to right.
    longestPalindrome(s) {
        // code here
       class Solution {
    longestPalindrome(s) {
        if (!s || s.length === 0) return "";

        let start = 0, maxLen = 0;

        for (let i = 0; i < s.length; i++) {
            // Odd length palindromes
            this.expandAroundCenter(s, i, i, (left, right) => {
                if (right - left + 1 > maxLen) {
                    start = left;
                    maxLen = right - left + 1;
                }
            });

            // Even length palindromes
            this.expandAroundCenter(s, i, i + 1, (left, right) => {
                if (right - left + 1 > maxLen) {
                    start = left;
                    maxLen = right - left + 1;
                }
            });
        }

        return s.substring(start, start + maxLen);
    }

    expandAroundCenter(s, left, right, callback) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // Send the valid palindrome boundaries back
        callback(left + 1, right - 1);
    }
}
    }


    6// Given an array of strings arr[]. Return the longest common prefix among each and every strings present in the array. If there's no prefix common in all the strings, return "".

    longestCommonPrefix(arr) {
        // code here
        let same = ""
        let first = arr[0]
        for(let i = 0 ; i < first.length  ; i++){
            
                  let sametosame = 0
                  
            for(let j = 1 ; j < arr.length ; j++){ 
                if(first[i] == arr[j].charAt(i)){
                    sametosame += 1
                }else{
                    return same
                }
            }
            
            if(sametosame == arr.length - 1) same += first[i]
        }
        
        return same
    }

    7.//Given a string s consisting of lowercase English Letters. Return the first non-repeating character in s.
// If there is no non-repeating character, return '$'.
// Note: When you return '$' driver code will output -1.

    nonRepeatingChar(s) {
        // code here
        let freq = {}
        
        for(let i = 0 ; i < s.length ; i++){
            if(freq[s[i]]){
                freq[s[i]] += 1
            }else{
                freq[s[i]] = 1
            }
        }
        
        let result = "$"
        for (const keys in freq) {
           if(freq[keys] == 1){
              result = keys
              break
           }
           
        }
        console.log(11 < parseInt("010"))
        return result
        
    }


    8. //You are given a string s in the form of an IPv4 Address. Your task is to validate an IPv4 Address, if it is valid return true otherwise return false.

// IPv4 addresses are canonically represented in dot-decimal notation, which consists of four decimal numbers, each ranging from 0 to 255, separated by dots, e.g., "172.16.254.1"

// A valid IPv4 Address is of the form x1.x2.x3.x4 where 0 <= (x1, x2, x3, x4) <= 255. Thus, we can write the generalized form of an IPv4 address as (0-255).(0-255).(0-255).(0-255)

// Note: Here we are considering numbers only from 0 to 255 and any additional leading zeroes will be considered invalid.

    isValid(s) {
        // code here
        s = s.split(".")
        let correct = 0
        console.log(s);
        
        if(s.length !== 4) return false
        if(s.includes('')) return false

        for(let i = 0 ; i < s.length ; i++){
            if(s[i] > 255 || s[i] < 0){
               return false
            }
            
            if(s[i].includes("0")  && s[i].length > 1){
                let char = s[i].charAt(0)
                    if(char == "0"){
                        return false
                    }
            }
           
            correct += 1
            
        }
        
        if(correct == s.length){
            return true
        }
    }


    10. //

    isPalindrome(s) {
        // code here
        let str = s
        let str2 = str.split('').reverse().join("") 
        if(str == str2){
            return true
        }else{
            return false
        }
        
        
        
    }
}

const s = new Solution()
// console.log(s.reverseWords("")); 
// console.log(s.longestPalindrome("forgeeksskeegfor"));
// console.log(s.longestCommonPrefix(["geeksforgeeks", "geeks", "geek", "geezer"]));
// console.log(s.nonRepeatingChar("aabbccc"));
// console.log(s.isValid("255..255.255"));
console.log(s.isPalindrome("abc"));


11.  // Given two non-empty strings s1 and s2, consisting only of lowercase English letters, determine whether they are anagrams of each other or not. Two strings are considered anagrams if they contain the same characters with exactly the same frequencies, regardless of their order.

// Examples:

// Input: s1 = "geeks" s2 = "kseeg"
// Output: true 
// Explanation: Both the string have same characters with same frequency. So, they are anagrams. 


function areAnagrams(s1, s2) {
        // code here
        let obj1 = {}
        let obj2 = {}
        if(s1.length !== s2.length){
            return false
        }

        setFreq(s1 , obj1)
        setFreq(s2 , obj2)
        
        for(let i = 0 ; i < s1.length ; i++){
            if(obj1[s1[i]] !== obj2[s1[i]]){
                  return false
            }
        }
       return true
        
    }

    function setFreq (str , obj){
        for (let i = 0; i < str.length; i++) {
           if(obj[str[i]]){
             obj[str[i]] += 1
           }else{
              obj[str[i]] = 1
           }
            
        }
    }
    // console.log(areAnagrams("allergy", "allergg"));
    
 12. //Given a string s in Roman number format, your task is to convert it to an integer. Various symbols and their values are given below.
// Note: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000

// Examples:

// Input: s = "IX"
// Output: 9
// Explanation: IX is a Roman symbol which represents 10 – 1 = 9.
// Input: s = "XL"
// Output: 40
// Explanation: XL is a Roman symbol which represents 50 – 10 = 40.
// Input: s = "MCMIV"
// Output: 1904
// Explanation: M is 1000, CM is 1000 – 100 = 900, and IV is 4. So we have total as 1000 + 900 + 4 = 1904.
// Constraints:

function romanToDecimal(s) {
        // code here
        const map = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
  let total = 0;
  for(let i = 0; i < s.length; i++) {
    if(map[s[i]] < map[s[i+1]]) total -= map[s[i]];
    else total += map[s[i]];
  }
  return total
    }