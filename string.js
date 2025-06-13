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
                }
            }
            
            if(sametosame == 3) same += first[i]
        }
        
        return same
    }
}

const s = new Solution()
// console.log(s.reverseWords("")); 
// console.log(s.longestPalindrome("forgeeksskeegfor"));
console.log(s.longestCommonPrefix(["geeksforgeeks", "geeks", "geek", "geezer"]));