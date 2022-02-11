import '../../../Components/body/body.css';
import {speed} from '../../../Components/Header/slider/slider'

const SECONDARY_COLOR = 'red';
const PRIMARY_COLOR = 'black'

export async function completeMergeSort(array,setArray,returnArrayLength,setRunning){
    const arrayBars = document.getElementsByClassName('array-bar');
    //driver code
    setRunning(true);
    try{
      await mergeSort([...array],0,returnArrayLength()-1,setArray,returnArrayLength,arrayBars)
    }catch(e){
      return true
    }
    setRunning(false);

    return new Promise((resolve,reject)=>{
        resolve();
    })
}


async function merge(arr, l, m, r,setArray,returnArrayLength,arrayBars)
{
    let n1 = m - l + 1;
    let n2 = r - m;
  
    let L = new Array(n1); 
    let R = new Array(n2);
  
    for (let i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (let j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
  
    let i = 0;
    let j = 0;
    let k = l;

    while (i < n1 && j < n2) {
      if(l+i >= returnArrayLength() || m+j>= returnArrayLength()) break;
      let barOneStyle = arrayBars[l+i].style
      let barTwoStyle = arrayBars[m+j].style
      barOneStyle.backgroundColor = SECONDARY_COLOR;
      barTwoStyle.backgroundColor = SECONDARY_COLOR;
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        setArray([...arr]);
        k++;
        await waitTime(speed/2)
        barOneStyle.backgroundColor = PRIMARY_COLOR
        barTwoStyle.backgroundColor = PRIMARY_COLOR
    }
  
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
  
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }

    return new Promise((resolve)=>{
      resolve();
    })
}
  
async function mergeSort(arr,l, r,setArray,returnArrayLength,arrayBars){
    if(l>=r){
        return new Promise((resolve)=>{
          resolve();
        });
    }
    let m =l+ parseInt((r-l)/2);
    await mergeSort(arr,l,m,setArray,returnArrayLength,arrayBars);
    await mergeSort(arr,m+1,r,setArray,returnArrayLength,arrayBars);
    await merge(arr,l,m,r,setArray,returnArrayLength,arrayBars);
}

async function waitTime(interval){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve();
    },interval)
  })
}