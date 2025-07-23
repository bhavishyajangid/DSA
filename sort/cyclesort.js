// ******************************** CYCLE SORT *******************************

// NOTE : - CYCLE SORT ONLY WORK WHEN WE KNOW THE RANGER OF THE NUMBER IS THE NUMEBER IS BETWEEN O TO N OR 0 TO N-1 IF WE KNOW THEN WE USE CYCLE SORT

// if the range is between o to n-1 then we not -1 from the element because its presen to the same in dex in this situation
function cycleSort(arr) {
  let i = 0; // O(n) time complexity
  // O(1) space complexity
  while (i < arr.length) {
    let currentIdx = arr[i] - 1; // if the range is 0 to n-1 then only element not -1
    if (arr[i] !== arr[currentIdx]) {
      [arr[i], arr[currentIdx]] = [arr[currentIdx], arr[i]]; // swap the elements
    } else {
      i++;
    }
    console.log(arr, arr[i], currentIdx);
  }
  return arr;
}

// console.log(cycleSort([1,5,8,2,6,4,3,7])); // Output: [1,2,3,4,5,6,7,8]

// this is only work on when weknow the range of the number like number is between 1 to 8 here and this follow this condition if the array is sorted the orignal index of the element is the number -1 like 2 index is 1 or 8 index is 7 in the sorted array so in this logic we check if the element is present on its correct index or not currect index is element -1 if not then swap if yes then i++ or if the range is between o to n-1 then we not -1 from the element because its presen to the same in dex in this situation

1; // missing the element in the array
// we have an array given range between [0 , n ] in this array finf the missing element in the array
function findMissingElement(arr) {
  let i = 0;
  while (i < arr.length) {
    let currentIdx = arr[i];
    if (arr[i] !== currentIdx && arr[i] < arr.length) {
      [arr[i], arr[currentIdx]] = [arr[currentIdx], arr[i]];
    } else {
      i++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (i !== arr[i]) return i;
  }
  return arr.length;
}
console.log(findMissingElement([0, 1, 2])); // Output: 4 is the missing element
