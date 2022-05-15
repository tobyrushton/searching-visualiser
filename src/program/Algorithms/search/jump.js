export function getJumpSearchAnimations(array,searchNumber){
    const animations = []; 
    if(array.length<=1) return array;
    doJump(array,animations,searchNumber)
    return animations;
  }
  
  function doJump(
    array,
    animations,
    searchNumber
  )
  {
    let n = array.length;
    const step = Math.floor(Math.sqrt(n));
  
      let blockStart = 0, currentStep = step;
  
      while (array[Math.min(currentStep, n) - 1] < searchNumber)
      {
          blockStart = currentStep;
          currentStep += step;
          animations.push(blockStart)

          if (blockStart >= n)
              return animations;
      }
      animations.push(Math.min(currentStep, n) - 1)
      
      if(array[blockStart+step-1] === searchNumber) return animations //safety return cause due to sometimes the array while loop activating despite it being redundant.
      while (array[blockStart] < searchNumber)
      {
          blockStart++;
          animations.push(blockStart)
  
          if (blockStart === Math.min(currentStep, n))
              return animations;
      }
  
      if (array[blockStart] === searchNumber){
          return animations
    }
      else{
          return animations;
    }
  
  }