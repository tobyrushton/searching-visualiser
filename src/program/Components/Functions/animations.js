import '../body/body.css';
import { speed } from '../Header/slider/slider';

const HIGHLIGHT = 'orange'; 
const SEARCH_COLOR = '#2AFF00';
const SECONDARY_COLOR = 'red';

export async function searchAnimation(animations,setRunning, incrementCount, returnArrayLength){

  setRunning(true);
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName('array-bar');
    const barIdx = animations[i];
    try{
      if(animations[i] < returnArrayLength()) 
      {
        const barStyle = arrayBars[barIdx].style;
        const color = i+1 === animations.length ? SEARCH_COLOR : SECONDARY_COLOR;
  
        await waitTime(speed/2)
        barStyle.backgroundColor = HIGHLIGHT;
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
