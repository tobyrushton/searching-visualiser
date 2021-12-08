const PRIMARY_COLOR = 'black';

export function colorReset(bars){

    for(let i = 0;i < bars;i++){
      const arrayBars = document.getElementsByClassName('array-bar');
      const barStyle = arrayBars[i].style;
  
      barStyle.backgroundColor = PRIMARY_COLOR;
    }
  
  }
  