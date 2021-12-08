import '../body/body.css';

const HIGHLIGHT = 'orange'; 
const SEARCH_COLOR = '#2AFF00';
const SECONDARY_COLOR = 'red';

export function searchAnimation(animations,speed){
  sleep(200)
  .then(()=>{
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const barIdx = animations[i];
      const barStyle = arrayBars[barIdx].style;
      const color = i+1 === animations.length ? SEARCH_COLOR : SECONDARY_COLOR;

      setTimeout(()=>{
        barStyle.backgroundColor = HIGHLIGHT;
        setTimeout(()=>{
          barStyle.backgroundColor = color;
        },speed);
      },i* speed);
    }
  })
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
