import '../body/body.css';
import { speed } from '../Header/slider/slider';
import { colours } from '../../../colourScheme'

export async function searchAnimation(animations,setRunning, incrementCount, returnArrayLength){

  setRunning(true);
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName('array-bar');
    const barIdx = animations[i];
    try{
      if(animations[i] < returnArrayLength()) 
      {
        const barStyle = arrayBars[barIdx].style;
        const color = i+1 === animations.length ? colours.found : colours.secondary;
  
        await waitTime(speed/2)
        barStyle.backgroundColor = colours.highlight;
        incrementCount();
        await waitTime(speed/2);
        barStyle.backgroundColor = color;
      }
    }catch(e){
      return true
    }
  }

  setRunning(false)
  return new Promise((resolve)=>{
    resolve();
  })
}

async function waitTime(interval){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve();
    },interval)
  })
}
