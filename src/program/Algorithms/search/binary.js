export function getBinarySearchAnimations(array,searchNumber){
    const animations = [];
    if (array.length <=1) return array; 
    doBinary(array,animations,searchNumber)
    return animations; 
  }
  
  function doBinary(
    array,
    animations,
    searchNumber,
  )
  {
    let start = 0;
    let end = array.length - 1;
  
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        animations.push(middle);
  
        if (array[middle] === searchNumber) {
           return animations;
        } else if (array[middle] < searchNumber) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return animations;
  
  }