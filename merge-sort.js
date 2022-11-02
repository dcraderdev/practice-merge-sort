// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {





  // Check if the input is length 1 or less
    // If so, it's already sorted: return

  // Divide the array in half

  // Recursively sort the left half
  // Recursively sort the right half

  // Merge the halves together and return

}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
console.log('arrA', arrA);
console.log('arrB', arrB);
  let returnArr = new Array

  // Point to the first value of each array
  let aFirst = arrA[0]
  let bFirst = arrA[0]
  
  // while(arrA.length && arrB.length){
  //   if(aFirst<bFirst){

  //   }


  // }

  // While there are still values in each array...
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array

  // Return the return array
return returnArr
}

module.exports = [merge, mergeSort];

