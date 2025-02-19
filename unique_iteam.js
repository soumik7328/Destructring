/*You are building a program that takes an array of numbers as input and you need to remove 
all the duplicates from the array. You want to write a function that can accomplish this task 
efficiently and returns a new set that contains only the unique elements.*/

function uniqueElements(arr) {
    return new Set(arr);
  }
  
  console.log(uniqueElements([1, 2, 2, 3, 3, 4])); // Set { 1, 2, 3, 4 }
  console.log(uniqueElements([11,25,38,98,38,66,2,98,98,38])); // Set { 5, 6, 7, 8 }
  