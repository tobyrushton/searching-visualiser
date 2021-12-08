export function getFibonacciSearchAnimations(array,searchNumber){
    const animations = []; 
    if(array.length<=1) return array;
    doFibonacci(array,animations,searchNumber)
    return animations;
  }
  
  function doFibonacci(
    array,
    animations,
    searchNumber
  )
  {
  let n = array.length;
  let fibMMm2 = 0; 
  let fibMMm1 = 1; 
  let fibM = fibMMm2 + fibMMm1;
  
  while (fibM < n)
  {
      fibMMm2 = fibMMm1;
      fibMMm1 = fibM;
      fibM = fibMMm2 + fibMMm1;
  }
  
  let offset = -1;
  
  
  while (fibM > 1)
  {
      
      let i = Math.min(offset + fibMMm2, n-1);
      animations.push([i]);
  
      if (array[i] < searchNumber)
      {
          fibM = fibMMm1;
          fibMMm1 = fibMMm2;
          fibMMm2 = fibM - fibMMm1;
          offset = i;
      }
  
      else if (array[i] > searchNumber)
      {
          fibM = fibMMm2;
          fibMMm1 = fibMMm1 - fibMMm2;
          fibMMm2 = fibM - fibMMm1;
      }
  
      else{
        return animations;
      }
  }
  
  if(fibMMm1 && array[n-1] === searchNumber){
    animations.push([n-1]);
    return animations
  }
  
  return animations;
  
  
  }