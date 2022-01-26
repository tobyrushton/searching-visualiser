export function getLinearSearchAnimations(array,searchNumber){
    const animations = [];
    if (array.length <= 1) return array;
    doLinear(array,animations,searchNumber);
    return animations;
  }
  
  function doLinear(
    mainArray,
    animations,
    searchNumber
  )
  {
   for(let i = 0; i < mainArray.length;i++){
     if(mainArray[i] === searchNumber){
       animations.push([i]);
       return animations
     }
     else
     {
       animations.push([i]);
      }
      
   }
   return animations
  
  }