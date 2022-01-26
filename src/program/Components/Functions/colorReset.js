const PRIMARY_COLOR = 'black';

export function colorReset(){
  const arrayBars = document.getElementsByClassName('array-bar');
  for(let i = 0;i < arrayBars.length;i++){
    const barStyle = arrayBars[i].style;
    barStyle.backgroundColor = PRIMARY_COLOR;
  }
  
  }
  